import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../template/Header';
import Dashboard from '../dashboard/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col" >

            <Switch>
              <Route
                path="/"
                component={Dashboard}
                exact
              />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
