import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../template/Header';
import Bookcase from '../bookcase/Bookcase';

import AddBookPage from '../book/AddBookPage';
import AddUserPage from '../user/AddUserPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />

      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col" >

            <Switch>
              <Route
                path="/bookcase"
                component={Bookcase}
                exact
              />

              <Route
                path="/book/new"
                component={AddBookPage}
                exact
              />

              <Route
                path="/user/new"
                component={AddUserPage}
                exact
              />

              <Route component={Bookcase} />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
