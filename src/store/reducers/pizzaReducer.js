// Initial state
const initialState = {
  cart: [],
  pizzaList: [],
};

/**
 * Pizza Reducer
 * @param {object} state current state, defaulted to the initial state
 * @param {object} action reducer action
 */
const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.pizza] };
    case 'SET_PIZZA_LIST':
      return { ...state, pizzaList: action.pizzaList };
    case 'FLUSH_CART':
      return { ...state, cart: initialState.cart };
    default:
      return state;
  }
};

export default pizzas;
