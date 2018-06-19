import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../template/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
  </BrowserRouter>
);

export default AppRouter;
