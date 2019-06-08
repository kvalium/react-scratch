import React from 'react';

export default function PizzaCart({ cart, total }) {
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      <ul>
        {cart.map((c, i) => (
          <li key={i}>{c.name}</li>
        ))}
      </ul>
      <hr />
      <p>{`Total: ${total} €`}</p>
    </>
  );
}
