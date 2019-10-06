import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import paths from './paths';

function renderRoute(route, key) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => <route.component {...props} />}
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

const Index = () => <Switch>{renderRoutes(paths)}</Switch>;

export default Index;
