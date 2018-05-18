
/* eslint react/jsx-max-props-per-line: 0 */
/* eslint react/jsx-sort-props: 0 */ 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import App from './App';

import Home from './../routes/home'
import Compare from './../routes/compare'
import NotFound from './../routes/not-found'

const Root = (props) => {

  return (
    <Router>
      <App>
        <Switch>    
          <Route exact path="/" render={() => (
            <Redirect to="/_home" />
          )}/>
          <Route exact path="/_home" component={Home} />
          <Route exact path="/_compare/:id_car" component={Compare} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  );
};

export default Root;