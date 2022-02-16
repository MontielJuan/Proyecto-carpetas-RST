import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Tree from "../components/Tree";
import firebase, { storage } from "../firebase";

const treeData = [
  {
    label: "Documents",
    icon: "fa fa-folder",
    cursor: "cursor-pointer",
    children: [
      {
        label: "Document 1-1",
        icon: "fa fa-folder",
        cursor: "cursor-pointer",
        children: [
          {
            label: "Document-0-1.doc",
            icon: "fa fa-file",
          },
          {
            label: "Document-0-2.doc",
            icon: "fa fa-file",
          },
        ],
      },
    ],
  },
  {
    label: "Documents2",
    icon: "fa fa-folder",
    cursor: "cursor-pointer",
    children: [
      {
        label: "Document-0-1.doc",
        icon: "fa fa-file",
      },
      {
        label: "Document-0-2.doc",
        icon: "fa fa-file",
      },
    ],
  },
];

const savingData = async (referencia) => {
  const variables = await referencia.listAll();
  return variables.prefixes.map((data) => {
    return {
      path: data.fullPath,
      label: data.name,
      icon: "fa fa-folder",
      cursor: "cursor-pointer",
    };
  });
};

const savingDataItems = async (referencia) => {
  const variables = await referencia.listAll();
  return variables.items.map((data) => {
    return {
      path: data.fullPath,
      label: data.name,
      icon: "fa fa-file",
      
    };
  });
};

const myFunction = async (array, propiedad, temporalPath = "") => {

  return await Promise.all(
    array.map(async (dato) => {

      const days = await savingData(
        firebase.storage().ref(dato.path + temporalPath)
      );
      dato[propiedad] = await days;
      return dato;
    })
  );
};

const myFunction2 = async (array, propiedad, temporalPath = "") => {
  
  return await Promise.all(
    array.map(async (dato) => {
      const files = await myFunction3(dato.dias, "children");
      dato[propiedad] = await files;
      return dato;
    })
  );
};

const myFunction3 = async (array, propiedad, temporalPath = "") => {

  return await Promise.all(
    array.map(async (dato) => {


      const days = await savingDataItems(
        firebase.storage().ref(dato.path + temporalPath)
      );
      dato[propiedad] = await days;
      return dato;
    })
  );
};

const TreeList = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    async function fetchData() {
      const locals = await savingData(firebase.storage().ref("Informes"));
      const dias = await myFunction(locals, "dias", "/Mes");
      const archivos = await myFunction2(dias,"children");
      setData(archivos);
    }
    fetchData();

    

  }, []);

  return (
    <>
      <Header title="Almacen"></Header>
      <div className="row">
        <div className="col text-center">
          <h2>Almacen</h2>
          <div className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreeList;
