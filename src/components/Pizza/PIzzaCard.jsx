import React from 'react';
import { Link } from 'react-router-dom';

export default function PizzaCard({ id, name, desc, price }) {
  return (
    <Link to={`/pizza/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
            </div>
          </div>

          <div className="content">{desc}</div>
        </div>
      </div>
    </Link>
  );
}
