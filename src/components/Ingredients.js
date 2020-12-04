import React from 'react';
import { useSelector } from 'react-redux';
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
  
  const counter = useSelector((state) => state.counter);
  
  return (
    <div>
      <p>Pizza</p>
      {products.map((item, index) => (
        <Checkbox label={item} key={index} />
      ))}
      {counter > 5 && <p>Please, choose only 5 ingredients!</p>}
    </div>
  );
};

export default Ingredients;
