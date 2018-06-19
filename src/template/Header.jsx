import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink className="navbar-brand" to="/" >
      QS-React
    </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>


    <div className="collapse navbar-collapse" id="navbarText">

      <ul className="navbar-nav mr-auto">
        <li activeClassName="active">
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
        </li>
        <li activeClassName="active">
          <NavLink className="nav-link" to="/users" exact>Usuários</NavLink>
        </li>
        <li activeClassName="active">
          <NavLink className="nav-link" to="/books" exact>Livros</NavLink>
        </li>
      </ul>

    </div>

  </nav>
);

export default Header;
