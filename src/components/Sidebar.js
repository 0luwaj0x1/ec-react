import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/question-one">
            QUESTION ONE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/question-two">
            QUESTION TWO
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/question-three">
            QUESTION THREE
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/question-four">
            QUESTION FOUR
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Sidebar;
