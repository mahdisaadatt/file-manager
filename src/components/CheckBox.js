import React from 'react';

const CheckBox = ({ text, id, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="inline-block">
        <input
          id={id}
          type="checkbox"
          {...props}
          className="float-left h-6 w-6 appearance-none rounded border-2 border-solid border-gray-500 outline-none before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-gray-600 checked:bg-gray-600 checked:before:opacity-[0.16] transition duration-200 cursor-pointer"
        />
      </div>
      <label htmlFor={id} className="ml-2 text-xsm font-semibold text-light-0">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
