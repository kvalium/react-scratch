import React, { Component } from 'react';
import PizzaList from './PizzaList';

import { fetchPizzas } from '../../services/fetchPizzas';

/**
 * PizzaListContainer container for the pizzaList component
 * Fetch and load a list of pizzas from a back-end
 * Handles pizza list filtering
 *
 * * CONCEPTS
 * * --------
 * * stateful container
 * * State initialization
 * * Basic lifecyle: contructor, componentDidMount
 * * Advanced lifecycle: shouldComponentUpdate
 * * Event handler
 * * Conditional rendering based upon state
 *
 */
export default class PizzaListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, pizzas: [], selection: [] };
  }

  componentDidMount() {
    fetchPizzas().then(pizzas => this.setState({ pizzas, selection: pizzas, loading: false }));
  }

  /**
   * Prevent pizza list re-render if not modified
   * @param {*} _ NextProps, unused
   * @param {*} nextState future state
   */
  shouldComponentUpdate(_, nextState) {
    const { selection } = this.state;
    if (JSON.stringify(nextState.selection) === JSON.stringify(selection)) {
      return false;
    }
    return true;
  }

  /**
   *
   */
  onSearch = (e) => {
    const { pizzas } = this.state;
    const searchTerm = e.target.value;
    const selectedPizzas = pizzas
      .filter(pizza => pizza.name.toLowerCase().includes(searchTerm.toLowerCase()));
    this.setState({ selection: selectedPizzas });
  }

  render() {
    const { pizzas, selection, loading } = this.state;
    if (loading) return <p>Chargement...</p>;
    return <PizzaList onSearchChange={this.onSearch} selection={selection} total={pizzas.length} />;
  }
}
