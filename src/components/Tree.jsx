import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./index.css";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree,index) => (
          <TreeNode node={tree} index={index} key={index}/>
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node, index }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className={`d-tree-node border-0`}>
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon="caret-right"/>
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon} ${node.cursor}`}> </i>
          {
            node.link === undefined ? node.label : <a href={node.link[index]}>{node.label}</a>
          }

        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;