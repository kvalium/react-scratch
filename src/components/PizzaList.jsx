import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pizzalist
 * @param {array} pizzas array of pizzas
 */
export default function PizzaList({ pizzas }) {
  return (
    <ul>
      {pizzas.map(({ name, price }) => (
        <li key={name}>
          {`${name}: ${price}`}
        </li>
      ))}
    </ul>
  );
}

PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })),
};

PizzaList.defaultProps = {
  pizzas: [],
};
