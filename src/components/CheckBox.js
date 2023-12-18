import React from 'react';

const CheckBox = ({ text, id, ...props }) => {
  return (
    <label className="form-control" htmlFor={id}>
      <input type="checkbox" name="checkbox" id={id} {...props} />
      {text}
    </label>
  );
};

export default CheckBox;
