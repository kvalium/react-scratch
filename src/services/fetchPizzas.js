/**
 *
 */
const fetchPizzas = () => (
  // simulate back-end fetch
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [
          { name: 'Margherita', desc: "tomate, mozzarella, basilic, huile d'olive", price: '10' },
          { name: 'Reine', desc: 'tomate, mozzarella, jambon, champignons', price: '12' },
          { name: 'Napolitaine', desc: "tomate, mozzarella, anchois, olives noires, origan, huile d'olive", price: '12' },
          { name: 'Marina', desc: "tomate, ail, origan, huile d'olive", price: '14' },
          { name: 'Diavola', desc: 'mozzarella, tomate, salami piquant', price: '14' },
          { name: 'Romaine', desc: "tomate, mozzarella, anchois, origan, huile d'olive", price: '15' },
          { name: 'Sicilienne', desc: 'tomate, mozzarella, basilic, anchois, câpres, champignon', price: '15' },
          { name: 'Capricciosa', desc: "mozzarella, champignons, artichaut, jambon, olives, huile d'olive", price: '17' },
          { name: 'Quatre saisons', desc: "généralement les mêmes ingrédients qu'une capricciosa selon les saisons", price: '17' },
          { name: 'Quatre fromages', desc: "mozzarella et d'autres fromages, variant selon les spécialités locales", price: '18' },
          { name: 'Calzone', desc: 'garnie de mozzarella, jambon, champignons, sauce tomate, œufs ou autres ingrédients', price: '18' },
          { name: 'Hawaïenne', desc: 'tomate, mozzarella, jambon, ananas', price: '15' },
        ],
      );
    }, 1000);
  })
);

export default fetchPizzas;
