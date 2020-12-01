import React, { useState } from 'react';

const Checkbox = ({ label, plus1, minus1 }) => {
  const [checked, setChecked] = useState(false);

  const func = () => {
   setChecked(!checked);
   !checked ? plus1() : minus1()
  }

  return (
    <div>
      <label>{label}</label>
      <input
        type='checkbox'
        onChange={func}
        selected={checked}
      />
    </div>
  );
};

export default Checkbox;
