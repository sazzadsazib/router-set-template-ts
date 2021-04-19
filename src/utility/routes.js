import React from 'react';
import { Router } from '@reach/router';
import Home from './../pages/home';
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
        <Router>
          <Home path='/' />
          <NotFound default />
        </Router>

  );
};

export default Routes;
