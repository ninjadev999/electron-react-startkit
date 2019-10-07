import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { themeMaterial } from '../styles/material/index';
import paths from './paths';

function renderRoute(route, key) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        <route.layout>
          <route.component {...props} />
        </route.layout>
      )}
      key={key}
    />
  );
}

function renderRoutes(routes) {
  return routes.map((prop, key) => {
    if (prop.redirect) return <Redirect from={prop.path} to={prop.to} />;
    return renderRoute(prop, key);
  });
}

const Index = () => (
  <MuiThemeProvider theme={themeMaterial}>
    <Switch>{renderRoutes(paths)}</Switch>
  </MuiThemeProvider>
);

export default Index;
