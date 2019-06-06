import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound, Home, PizzaListContainer } from './components';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={PizzaListContainer} />
      <Route component={NotFound} />
    </Switch>
  );
}
