import pizzaData from './pizzas.json';

/**
 *
 */
const fetchPizzas = () => (
  // simulate back-end fetch
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(pizzaData);
    }, 1000);
  })
);

const fetchPizza = id => (
  new Promise((resolve, reject) => {
    fetchPizzas().then((pizzas) => {
      const selectedPizza = pizzas.find(p => p.id === parseInt(id, 10));
      if (selectedPizza) {
        resolve(selectedPizza);
      }
      reject(new Error(`Pizza #${id} not found.`));
    });
  })
);

export { fetchPizzas, fetchPizza };
