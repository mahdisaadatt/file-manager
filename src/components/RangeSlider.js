'use client';
import React, { useState } from 'react';
import Slider from 'react-slider';
import { convertToPersian } from '@/utils';

const RangeSlider = ({ text, label, values, setValues, hidden, min, max }) => {
  return (
    <div
      className={`py-5 px-3 bg-gray-400 rounded-lg tablet:w-[500px] w-full ${
        !hidden ? 'hidden' : null
      }`}
    >
      <h2 className="font-bold text-lg">{text}</h2>
      <div className="flex flex-row-reverse items-center justify-between mx-0 my-2 gap-10">
        <div>
          <label className="text-sm font-medium" htmlFor="minPrice">
            حداقل
          </label>
          <p id="min-value" className="text-lg font-semibold">
            {label === 'تومان' ? convertToPersian(values[0]) : values[0]}
          </p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="maxPrice">
            حداکثر
          </label>
          <p id="max-value" className="text-lg font-semibold">
            {label === 'تومان' ? convertToPersian(values[1]) : values[1]}
          </p>
        </div>
      </div>

      <Slider
        className="slider"
        onChange={setValues}
        value={values}
        min={min}
        max={max}
      />
    </div>
  );
};

export default RangeSlider;
