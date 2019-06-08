import React, { Component } from 'react';

import { fetchPizzas } from '../../services/fetchPizzas';
import PizzaListContainer from './PizzaListContainer';
import PizzaCartContainer from './PizzaCartContainer';

export default class Pizzas extends Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: undefined, cart: [], loading: true };
  }

  /**
   * Fetch pizzas on mount
   */
  componentDidMount() {
    fetchPizzas().then(pizzas => this.setState({ pizzas, loading: false }));
  }

  /**
   * Add to Cart handler
   */
  onAddToCart = (pizzaId) => {
    const { pizzas, cart } = this.state;
    this.setState({ cart: [...cart, pizzas.find(p => p.id === pizzaId)] });
  }

  render() {
    const { pizzas, cart, loading } = this.state;

    if (loading) return <p>Chargement...</p>;

    return (
      <div className="columns">
        <div className="column is-10">
          <PizzaListContainer pizzas={pizzas} onAddToCart={this.onAddToCart} />
        </div>
        <div className="column is-2">
          <PizzaCartContainer cart={cart} />
        </div>
      </div>
    );
  }
}
