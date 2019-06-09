import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPizzaList } from '../../store/actions/pizzaAction';

import { fetchPizzas } from '../../services/fetchPizzas';
import PizzaListContainer from './PizzaListContainer';
import PizzaCartContainer from './PizzaCartContainer';

/**
 * Pizzas Component: Domain entry point
 *
 * * CONCEPTS
 * * --------
 * * Stateful class
 * * Component DidMount
 * * Async treatment
 * * handler
 */
export class Pizzas extends Component {
  /**
   * Fetch pizzas on mount
   */
  componentDidMount() {
    const { pizzas, setPizzas } = this.props;
    if (pizzas.length === 0) {
      fetchPizzas().then((pizzas) => {
        setPizzas(pizzas);
      });
    }
  }

  render() {
    const { pizzas } = this.props;
    if (pizzas.length === 0) return <p>Chargement...</p>;

    return (
      <div className="columns">
        <div className="column is-10">
          <PizzaListContainer />
        </div>
        <div className="column is-2">
          <PizzaCartContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pizzas: state.pizzas.pizzaList,
});

const mapDispatchToProps = dispatch => ({
  setPizzas: pizzaList => dispatch(setPizzaList(pizzaList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pizzas);
