import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PizzaList from './PizzaList';

/**
 * PizzaListContainer container for the pizzaList component
 * Fetch and load a list of pizzas from a back-end
 * Handles pizza list filtering
 *
 * * CONCEPTS
 * * --------
 * * stateful container
 * * State initialization
 * * Advanced lifecycle: shouldComponentUpdate
 * * Event handler
 * * Prop types checking
 */
export default class PizzaListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: props.pizzas,
    };
  }

  /**
   * Prevent pizza list re-render if not modified
   *
   * * BONUS
   *
   * @param {*} _nextProps NextProps, unused
   * @param {*} nextState future state
   */
  shouldComponentUpdate(_nextProps, nextState) {
    const { selection } = this.state;
    if (JSON.stringify(nextState.selection) === JSON.stringify(selection)) {
      return false;
    }
    return true;
  }

  /**
   * on search handler
   *
   * * BONUS
   */
  onSearch = (e) => {
    const { pizzas } = this.props;
    const searchTerm = e.target.value;
    const selectedPizzas = pizzas.filter(
      pizza => pizza.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    this.setState({ selection: selectedPizzas });
  }

  render() {
    const { selection } = this.state;
    const { pizzas, onAddToCart } = this.props;
    return (
      <>
        <PizzaList
          onSearchChange={this.onSearch}
          onAddToCart={onAddToCart}
          selection={selection}
          total={pizzas.length}
        />
      </>
    );
  }
}

PizzaListContainer.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
