'use client';
import { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import Button from './Button';
import { homeOptions, propertyOptions, starOptions } from '../data';

const FilterBar = ({ setFilters, filters }) => {
  const [text, setText] = useState('');
  const [selectedProperty, setSelectedProperty] = useState({});
  const [selectedHomeType, setSelectedHomeType] = useState({});
  const [selectedStar, setSelectedStar] = useState({});
  const onClearClick = () => {
    setFilters(null);
    setText('');
    setSelectedProperty({});
    setSelectedHomeType({});
    setSelectedStar({});
  };
  const onClick = () => {
    setFilters({
      text,
      selectedProperty: selectedProperty.value,
      selectedHomeType: selectedHomeType.label,
      selectedStar: selectedStar.value,
    });
  };
  return (
    <div className="w-full flex flex-col justify-center rounded-xl bg-zinc-200 mobile:p-12 p-6">
      <div className="flex desktop:justify-between justify-center items-center flex-wrap gap-10">
        <div className="tablet:w-72 mobile:w-72 w-full flex-grow">
          <Search value={text} onChange={e => setText(e.target.value)} />
        </div>
        <div className="flex gap-4 flex-col items-center justify-center flex-wrap flex-auto mobile:w-auto w-full">
          <div className="flex gap-4 items-center justify-center flex-wrap">
            <Filter
              dropdownTitle="دسته فایل"
              options={propertyOptions}
              selected={selectedProperty}
              setSelectedChange={setSelectedProperty}
            />
            {selectedProperty.value === 'home' ? (
              <Filter
                dropdownTitle="نوع"
                options={homeOptions}
                selected={selectedHomeType}
                setSelectedChange={setSelectedHomeType}
              />
            ) : null}
            <Filter
              dropdownTitle="انتخاب اولویت"
              options={starOptions}
              selected={selectedStar}
              setSelectedChange={setSelectedStar}
            />
          </div>
        </div>
        {filters ? <Button onClick={onClearClick}>حذف فیلتر ها</Button> : null}
      </div>
      <div className="mt-8">
        <Button onClick={onClick}>جستجو</Button>
      </div>
    </div>
  );
};

export default FilterBar;
