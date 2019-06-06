import React, { Component } from 'react';
import PizzaList from './PizzaList';

export default class PizzaListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] };
  }

  fetchPizzas = () => fetch('https://pizzeriapi.firebaseapp.com/api/v1/pizzeria/tinto/pizzas').then(blob => blob.json());

  componentDidMount() {
    this.fetchPizzas().then(pizzas => this.setState({pizzas}));
  }

  render() {
    const { pizzas } = this.state;
    return <PizzaList pizzas={pizzas} />;
  }
}
