import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Tree from "../components/Tree";
import firebase from "../firebase";

const treeData = [
  {
    key: "0",
    label: "Documents",
    icon: "fa fa-folder",
    title: "Documents Folder",
    cursor: "cursor-pointer",
    children: [
      {
        key: "0-0",
        label: "Document 1-1",
        icon: "fa fa-folder",
        title: "Documents Folder",
        cursor: "cursor-pointer",
        children: [
          {
            key: "0-1-1",
            label: "Document-0-1.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
          {
            key: "0-1-2",
            label: "Document-0-2.doc",
            icon: "fa fa-file",
            title: "Documents Folder",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Documents2",
    icon: "fa fa-folder",
    title: "Documents Folder2",
    cursor: "cursor-pointer",
    children: [
      {
        key: "0-1-1",
        label: "Document-0-1.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
      {
        key: "0-1-2",
        label: "Document-0-2.doc",
        icon: "fa fa-file",
        title: "Documents Folder",
      },
    ],
  },
];

const TreeList = () => {
  useEffect(() => {
    // const dataRef = firebase.storage().ref("Raspi montiel/Mes/Tuesday").listAll().then(function(result) {
    //   result.items.forEach(ref => {
    //     ref.getMetadata().then(url => {
    //       console.log(url)
    //     }).catch(e => {
    //       console.log(e);
    //     })
    //   })
    // });

    var firstPaths = [];

    firebase
      .storage()
      .ref("Raspi montiel")
      .listAll()
      .then((result) => {
        result.prefixes.forEach((mes) => {
          firstPaths.push(mes.fullPath);
          console.log(mes.name);
          firebase
            .storage()
            .ref(mes.fullPath)
            .listAll()
            .then((result2) => {
              result2.prefixes.forEach((dia) => {
                console.log(dia.name);
                firebase
                  .storage()
                  .ref(dia.fullPath)
                  .listAll()
                  .then((result3) => {
                    result3.items.forEach((archivo) => {
                      console.log(dia.name);
                      console.log(archivo.name);
                    });
                  });
              });
            });
        });
      });
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
                <Tree data={treeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TreeList;
