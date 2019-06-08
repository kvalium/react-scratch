import React from 'react';
import PropTypes from 'prop-types';
import PizzaCard from './PIzzaCard';

/**
 * Pizzalist diplays list of available pizzas and allow to filter them.
 * display number of matching pizzas on filtering or a message if no one matched.
 *
 * * CONCEPTS
 * * --------
 * * stateless component linked to a container
 * * Props types checking and default values
 * * JSX conditional syntax
 * * JSX lists and keys
 * * JSX Fragment
 * * Props destructuring
 *
 * @param {func} onSearchChange search handler on pizza list
 * @param {array} selection array of selected pizzas matching filters
 * @param {number} total total number of available pizzas
 */
export default function PizzaList({ onSearchChange, selection, total }) {
  const hasSelection = selection.length !== 0;
  return (
    <>
      <h1 className="title is-h1">Nos Pizzas</h1>
      <h4 className="title is-h4">Filtrer: </h4>
      <input type="text" onChange={onSearchChange} />

      <h5 className="title is-h5">
        {!hasSelection && <>Aucune pizza ne correspond à vos critères</>}
        {hasSelection && selection.length !== total && (
          <>{`${selection.length}/${total} pizzas affichées.`}</>
        )}
      </h5>
      {selection.map(pizza => <PizzaCard {...pizza} />)}
    </>
  );
}

PizzaList.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })),
  onSearchChange: PropTypes.func.isRequired,
  total: PropTypes.number,
};

PizzaList.defaultProps = {
  total: 0,
  selection: [],
};
