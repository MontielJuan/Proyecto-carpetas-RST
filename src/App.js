import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { auth } from './firebase';
import Data from './pages/Data';
import almacen from './pages/almacen'


import "../src/App.css"


function PrivateRoute({ component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => 
        authenticated === true ? (   
          <Component {...props} />
        ) : (
          <Redirect 
            to={{ pathname: "/login", state: { from: props.location }}} 
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest}) {
  return (
    <Route
    {...rest}
    render={(props) => 
      authenticated === false ? (
        <Component {...props} />
      ) : (
        <Redirect to='/almacen' />
        )
    }
    />
    );
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

   render() {
    return this.state.loading === true ? (
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/almacen"
              authenticated={this.state.authenticated}
              component={almacen}
            />
            <PublicRoute
              path="/login"
              authenticated={this.state.authenticated}
              component={Login}
            />
          </Switch>
        </Router>
      );
  }
}

export default App;