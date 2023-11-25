import React, { useState } from 'react';

const Input = ({ ...props }) => {
  const [value, setValue] = useState('');
  return (
    <div className="w-full">
      <label htmlFor={props.id}>{props.title}</label>
      <input
        className="rounded-lg border-gray-500 border-2 mt-1 outline-none bg-transparent p-2 h-12 w-full focus:ring-[1px] focus:ring-white transition"
        value={value}
        onChange={e => setValue(e.target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
