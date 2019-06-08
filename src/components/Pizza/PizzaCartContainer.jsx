import React, { Component } from 'react';

import PizzaCart from './PizzaCart';

export default class PizzaCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  componentDidMount() {
    this.calculateCart();
  }

  componentDidUpdate(prevProps) {
    const { cart } = this.props;
    if (prevProps.cart !== cart) {
      this.calculateCart();
    }
  }

  calculateCart = () => {
    const { cart } = this.props;
    const total = cart.reduce((acc, p) => acc + p.price, 0);
    
    /* BONUS */
    // const note = cart.reduce((acc, p) => {
    //   const obj = acc;
    //   if (!obj[p.id]) {
    //     obj[p.id] = 0;
    //   }
    //   obj[p.id]++;
    //   return obj;
    // }, {});

    this.setState({ total });
  }

  render() {
    const { total } = this.state;
    const { cart } = this.props;
    return <PizzaCart cart={cart} total={total} />;
  }
}
