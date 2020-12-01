import React, { useState } from 'react';
import Checkbox from './Checkbox';

const products = [
  'cheese',
  'pepperoni',
  'olives',
  'sausage',
  'cucumbers',
  'pineapples',
];

const Ingredients = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Pizza</p>
      {products.map((item, index) => (
        <Checkbox label={item} key={index} plus1={plus} minus1={minus} />
      ))}
      {count > 5 && <p>Please, choose only 5 ingredients!</p>}
    </div>
  );
};

export default Ingredients;
