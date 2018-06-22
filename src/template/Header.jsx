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
        <li>
          <NavLink className="nav-link" to="/bookcase" exact>Estante</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/user/new" exact>Usuários</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/books" exact>Livros</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/profile" exact>Meu Perfil</NavLink>
        </li>
      </ul>

    </div>

  </nav>
);

export default Header;
