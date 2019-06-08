import React from 'react';
import PropTypes from 'prop-types';

export default function PizzaCard({
  name, desc, price,
}) {
  return (
    <div className="pizza-link">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <p className="title is-4">{name}</p>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{`${price} €`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content">{desc}</div>
          <button type="button" className="button is-primary is-small is-rounded">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

PizzaCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
