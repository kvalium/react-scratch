/**
 * Add a pizza to the cart
 * @param {object} pizza pizza to add
 */
export const addToCart = pizza => ({
  type: 'ADD_TO_CART',
  pizza,
});

/**
 * Flush the cart
 */
export const flushCart = () => ({
  type: 'FLUSH_CART',
});

/**
 * Set the pizza list
 * @param {object[]} pizzaList the pizza list to set
 */
export const setPizzaList = pizzaList => ({
  type: 'SET_PIZZA_LIST',
  pizzaList,
});
