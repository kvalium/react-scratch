import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, PizzaListContainer, Pizza } from './components/Pizza';
import { NotFound } from './components/Struct';

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
      <Route path="/pizza/:id" component={Pizza} />
      <Route component={NotFound} />
    </Switch>
  );
}
