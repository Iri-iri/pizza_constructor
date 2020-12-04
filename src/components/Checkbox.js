import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { minus, plus } from '../actions';

const Checkbox = ({ label }) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const counterPlus = () => {
    dispatch(plus());
  };
  const counterMinus = () => {
    dispatch(minus());
  };

  const func = () => {
    setChecked(!checked);
    !checked ? counterPlus() : counterMinus();
  };

  return (
    <div>
      <label>{label}</label>
      <input type='checkbox' onChange={func} />
    </div>
  );
};

export default Checkbox;
