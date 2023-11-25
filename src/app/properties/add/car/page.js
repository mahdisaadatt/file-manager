'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import ImageSelector from '@/components/ImageSelector';
import Filter from '@/components/Filter';
import CheckBox from '@/components/CheckBox';
import { starOptions } from '../../../../data';

export default function AddCarPage() {
  const [selectedStar, setSelectedStar] = useState(starOptions);
  return (
    <form className="p-8" onSubmit={e => e.preventDefault()}>
      <div className="flex flex-col w-full justify-start gap-12">
        <ImageSelector />
        <div className="flex gap-4 items-center justify-around flex-wrap w-full">
          <div className="flex gap-4 items-center tablet:justify-start justify-center flex-wrap mobile:w-auto flex-auto">
            <Filter
              dropdownTitle="انتخاب اولویت"
              options={starOptions}
              selected={selectedStar}
              setSelectedChange={setSelectedStar}
            />
          </div>
        </div>
        <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6">
          <Input title="عنوان" id="title" />
          <Input title="قیمت" id="price" />
          <Input title="شماره تلفن صاحب" id="phone" />
          <Input title="آدرس" id="address" />
          <Input title="توضیحات" id="description" />
        </div>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg mt-6 hover:bg-green-700 transition">
          ایجاد
        </button>
      </div>
    </form>
  );
}
