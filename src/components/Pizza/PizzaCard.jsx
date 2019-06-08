import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PizzaCard({
  id, name, desc, price,
}) {
  return (
    <Link className="pizza-link" to={`/pizza/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column">
                  <p className="title is-4">{name}</p>
                </div>
                <div className="column is-one-quarter">
                  <p className="title is-4 has-text-primary">{`${price} €`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content">{desc}</div>
        </div>
      </div>
    </Link>
  );
}

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
