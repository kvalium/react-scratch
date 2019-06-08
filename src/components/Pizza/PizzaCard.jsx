import React from 'react';
import PropTypes from 'prop-types';

export default function PizzaCard({ pizza, onAddToCart }) {
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <p className="title is-4">{pizza.name}</p>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{`${pizza.price} €`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content">{pizza.desc}</div>
          <button type="button" className="button is-primary is-small is-rounded" onClick={() => onAddToCart(pizza.id)}>Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
