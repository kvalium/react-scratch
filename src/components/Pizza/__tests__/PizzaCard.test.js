import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import jest from 'jest-mock';

import PizzaCard from '../PizzaCard';

const fakePizza = {
  id: 1,
  name: 'Calzone',
  desc: 'fake pizza',
  price: 10,
};

/**
 * SNAPSHOT TEST
 */
test('renders', () => {
  const component = renderer.create(<PizzaCard pizza={fakePizza} onAddToCart={() => jest.fn()} />);
  expect(component.toJSON()).toMatchSnapshot();
});

/**
 * EVENT HANDLER TEST
 */
test('triggers onAddCart', () => {
  const addToCartMock = jest.fn();

  const wrapper = shallow(<PizzaCard pizza={fakePizza} onAddToCart={addToCartMock} />);
  wrapper.find('button').simulate('click');
  expect(addToCartMock).toHaveBeenCalledTimes(1);
});
