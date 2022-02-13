import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home">
        <section>
          <div>
            <section className="container text-center py-5">
              <div >
                <h1 className="display-4">Bienvenido</h1>
              </div>
              <div className="mt-4 ">
                <Link className="btn btn-primary px-5 mr-3" to = "/login">Ingresar</Link>
              </div>
            </section>
          </div>
        </section>
    </div>
    )
}

export default HomePage;