import React from "react";
import Header from "../components/Header";
import Tree from "../components/Tree";

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
  return (
    <>
	<Header title="Almacen"></Header>
      <div className="row">
        <div className="col text-center">
          <h2>Almacen</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default TreeList;
