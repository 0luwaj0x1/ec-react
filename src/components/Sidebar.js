import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/question-one">QUESTION ONE</Link>
        </li>
        <li>
          <Link to="/question-one">QUESTION ONE</Link>
        </li>
        <li>
          <Link to="/question-one">QUESTION ONE</Link>
        </li>
        <li>
          <Link to="/question-one">QUESTION ONE</Link>
        </li>
        <li>
          <Link to="/question-one">QUESTION ONE</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Sidebar;