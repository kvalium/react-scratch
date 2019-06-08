import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Pizza from './Pizza';

import { fetchPizza } from '../../services/fetchPizzas';

export default class PizzaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { pizza: undefined, hasError: false };
  }

  componentDidMount() {
    const { match } = this.props;
    fetchPizza(match.params.id).then(pizza => this.setState(pizza)).catch((e) => {
      this.setState({ hasError: e }); // Catching error, but the UI is not aware of it
    });
  }

  render() {
    const { pizza, hasError } = this.state;
    if (hasError) throw hasError; // Throw here to be handled by our error boundary
    return pizza ? <Pizza {...pizza} /> : <h1>Chargement...</h1>;
  }
}

PizzaContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
