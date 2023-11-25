import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = props => {
  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center px-1 border-2 border-black rounded-lg"
    >
      <MagnifyingGlassIcon className="w-4" />
      <input
        type="search"
        placeholder="جستجوی فایل"
        className="bg-transparent p-2 outline-none w-full"
        {...props}
      />
    </form>
  );
};

export default Search;
