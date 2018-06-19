import React from 'react';

import { NavLink } from 'react-router-dom';

export default () => (
  <div>
    <h3 className="text-center">Total de livros na estante: 0/10</h3>

    <NavLink to="/book/new" className="btn btn-primary btn-lg btn-block">
      Adicionar livro
    </NavLink>
  </div>
);
