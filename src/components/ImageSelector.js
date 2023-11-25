'use client';
import React from 'react';
import Image from 'next/image';
import defaultPhoto from '../app/assets/images/default.svg';

const ImageSelector = () => {
  const loadFile = e => {
    const input = e.target;
    const file = input.files[0];
    const type = file.type;

    const output = document.getElementById('preview_img');

    output.src = URL.createObjectURL(e.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="flex items-center space-x-6">
      <div className="shrink-0">
        <Image
          id="preview_img"
          className="mobile:h-44 mobile:w-44 w-20 h-20 object-cover rounded-md"
          src={defaultPhoto}
          alt="عکس"
        />
      </div>
      <label className="block">
        <span className="sr-only">انتخاب عکس</span>
        <input
          type="file"
          name="cover"
          onChange={loadFile}
          className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
        />
      </label>
    </div>
    // <div class="flex items-center justify-center w-full">
    //   <Image id="preview_img" src={defaultPhoto} alt="عکس" className='absolute w-12' />
    //   <label
    //     for="dropzone-file"
    //     class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    //   >
    //     <div class="flex flex-col items-center justify-center pt-5 pb-6">
    //       <svg
    //         class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 20 16"
    //       >
    //         <path
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
    //         />
    //       </svg>
    //       <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
    //         <span class="font-semibold">کلیک کن</span> یا فایل رو بکش رو صفحه
    //       </p>
    //       <p class="text-xs text-gray-500 dark:text-gray-400">
    //         SVG, PNG, JPG or GIF (MAX. 800x400px)
    //       </p>
    //     </div>
    //     <input
    //       id="dropzone-file"
    //       type="file"
    //       class="hidden"
    //       onChange={loadFile}
    //     />
    //   </label>
    // </div>
  );
};

export default ImageSelector;
