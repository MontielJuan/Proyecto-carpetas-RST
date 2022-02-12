import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase  from "../firebase"
import TablaGastos from "../components/TablaGastos";
import { SelectCity } from "../components/SelectCity";


const Data = () => {
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [mostrar, setMostrar] = useState(false)

    useEffect(() => {
      const dataRef = firebase.database().ref('users');
      dataRef.on('value', (snapshot) => {
        const datas = snapshot.val();
        const localData = [];
        for (let id in datas) {
          localData.push({ id, ...datas[id] });
        }
        setData(localData);

      });
    }, []);


    const cambiarEstado = () => {
      if(data !== undefined) {
        data.map((dato) => {
          const userRef = firebase.database().ref('users').child(dato.id);
          userRef.update({
            Estado:"OFF",
          });

          return null
        })
      }
    };

    const handleRefresh = () => {
      setMostrar(!mostrar)
      cambiarEstado();
    }


    return (
        <>     
        <nav className="navbar navbar-expand-sm navbar-light">
        
          <a className="p-2 navbar-brand" href="/data" >
                    
            Monitoreo de dispositivos
          </a>
          <button className="btn btn-dark mr-3" onClick={() => auth().signOut()}>Logout</button>            
        </nav>

        <br></br>

        <div className="container">
        <div className="row justify-content-center">       
        <button className="btn btn-warning" onClick={handleRefresh}>MostrarResultados</button>
        </div> 
        </div>

        {
          mostrar && (
            <div>
              <div className="container mt-3">
                <div className="row justify-content-center">
                  <div className="col-md-6"> 
                  <h2>Dispositivos <button className="btn btn-primary" onClick={() => {cambiarEstado()}}>Refrescar</button></h2>
                  <br></br>
                  
                  <div>
                    <SelectCity data={data} setFilteredData={setFilteredData} cambiarEstado={cambiarEstado} />
                  </div>
                </div>          
              </div>
                <TablaGastos data = {filteredData} setFilteredData={setFilteredData} cambiarEstado={cambiarEstado}/>
              </div>
            </div>
          )
        }
    </>
    );
}

export default Data;