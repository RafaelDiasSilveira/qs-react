import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../template/Header';
import Bookcase from '../bookcase/Bookcase';

import BookForm from '../book/BookForm';

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
                component={Bookcase}
                exact
              />

              <Route
                path-="/book/new"
                component={BookForm}
              />
            </Switch>

          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
