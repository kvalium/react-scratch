import React from 'react';
import { Switch, Route } from 'react-router';
import { NotFound, Home, PizzaListContainer } from './components/Pizza';

/**
 * App Router
 *
 * * CONCEPTS
 * * --------
 * * React Router Switch
 * * React Router Routes: default, exact, with param
 *
 */
export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={PizzaListContainer} />
      <Route component={NotFound} />
    </Switch>
  );
}
