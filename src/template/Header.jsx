import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">Navbar </a>

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

    <form className="form-inline">
      <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success my-2 my-sm-0" type="submit">Pesquisar</button>
    </form>

  </nav>
);

export default Header;
