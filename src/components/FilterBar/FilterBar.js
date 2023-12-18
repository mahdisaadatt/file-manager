'use client';
import { useState } from 'react';
import Search from '../Search';
import Filter from '../Filter';
import Button from '../Button';
import { homeOptions, propertyOptions, starOptions } from '../../data';
import CheckBox from '../CheckBox';
import RangeSlider from '../RangeSlider';
import Attributes from './Attributes';
import Rooms from './Rooms';

const METERAGE_MIN = 0;
const METERAGE_MAX = 400;

const MORTGAGE_MIN = 100000000;
const MORTGAGE_MAX = 5000000000;

const RENT_MIN = 1000000;
const RENT_MAX = 50000000;

const PRICE_MIN = 1000000000;
const PRICE_MAX = 20000000000;

const FilterBar = ({ setFilters, filters }) => {
  const [text, setText] = useState('');
  const [selectedProperty, setSelectedProperty] = useState({});
  const [selectedHomeType, setSelectedHomeType] = useState(homeOptions[0]);
  const [selectedStar, setSelectedStar] = useState({});
  const [rooms, setRooms] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [fullMortgage, setFullMortgage] = useState(false);
  const [convertable, setConvertable] = useState(false);

  const [hasMeterageSlider, setHasMeterageSlider] = useState(false);
  const [hasPriceSlider, setHasPriceSlider] = useState(false);
  const [hasMortgageSlider, setHasMortgageSlider] = useState(false);
  const [hasRentSlider, setHasRentSlider] = useState(false);

  const [meterage, setMeterage] = useState([METERAGE_MIN, METERAGE_MAX]);
  const [mortgage, setMortgage] = useState([MORTGAGE_MIN, MORTGAGE_MAX]);
  const [rent, setRent] = useState([RENT_MIN, RENT_MAX]);
  const [price, setPrice] = useState([PRICE_MIN, PRICE_MAX]);

  const onClearClick = () => {
    setFilters(null);
    setText('');
    setSelectedProperty({});
    setSelectedHomeType(homeOptions[0]);
    setSelectedStar({});
    setRooms({});
    setAttributes({});
    setConvertable(false);
    setFullMortgage(false);
  };
  const onClick = () => {
    setFilters({
      text,
      selectedProperty: selectedProperty.value,
      selectedHomeType: selectedHomeType.label,
      selectedStar: selectedStar.value,
      rooms,
      attributes,
      convertable,
      fullMortgage,
      meterage: hasMeterageSlider ? meterage : null,
      mortgage: hasMortgageSlider ? mortgage : null,
      rent: hasRentSlider ? rent : null,
      price: hasPriceSlider ? price : null,
    });
  };
  return (
    <div className="w-full flex flex-col justify-center rounded-xl bg-zinc-200 mobile:p-12 p-6">
      <div className="flex desktop:justify-between justify-center items-center flex-wrap gap-10 w-full">
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
        {selectedProperty.value === 'home' ? (
          <div className="flex flex-col mobile:items-start items-center justify-between gap-4 w-full">
            <div className="desktop:w-1/2 tablet:w-5/6 w-full flex mobile:flex-row flex-col tablet:items-start items-center mobile:gap-8 gap-4">
              <Rooms setRooms={setRooms} />
              <Attributes setAttributes={setAttributes} />
            </div>
            <hr className="h-[2px] w-full bg-gray-500" />
            {selectedHomeType.value === 'rent' ? (
              <div className="flex flex-col mobile:items-start items-center justify-center gap-4 w-full">
                <div className="flex gap-4 flex-wrap justify-center">
                  <h2 className="font-bold text-lg">وضعیت مالی</h2>
                  <div className="flex gap-4 flex-wrap justify-center items-center">
                    <CheckBox
                      text="قابل تبدیل"
                      id="convertable"
                      checked={convertable}
                      onChange={() => setConvertable(!convertable)}
                    />
                    <CheckBox
                      text="رهن کامل"
                      id="fullMortgage"
                      checked={fullMortgage}
                      onChange={() => setFullMortgage(!fullMortgage)}
                    />
                  </div>
                </div>
                <hr className="h-[3px] w-full bg-gray-500" />
                <div className="flex gap-4 flex-wrap justify-center items-center">
                  <CheckBox
                    text="رنج متراژ"
                    id="hasMeterage"
                    checked={hasMeterageSlider}
                    onChange={() => setHasMeterageSlider(!hasMeterageSlider)}
                  />
                  <CheckBox
                    text="رنج رهن"
                    id="hasMortgage"
                    checked={hasMortgageSlider}
                    onChange={() => setHasMortgageSlider(!hasMortgageSlider)}
                  />
                  {!fullMortgage ? (
                    <CheckBox
                      text="رنج اجاره"
                      id="hasRent"
                      checked={hasRentSlider}
                      onChange={() => setHasRentSlider(!hasRentSlider)}
                    />
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="flex flex-col mobile:items-start items-center justify-center gap-4 w-full">
                <div className="flex gap-4 flex-wrap justify-center items-center">
                  <CheckBox
                    text="رنج متراژ"
                    id="hasMeterage"
                    checked={hasMeterageSlider}
                    onChange={() => setHasMeterageSlider(!hasMeterageSlider)}
                  />
                  <CheckBox
                    text="رنج قیمت"
                    id="hasPrice"
                    checked={hasPriceSlider}
                    onChange={() => setHasPriceSlider(!hasPriceSlider)}
                  />
                </div>
              </div>
            )}
            <div className="flex gap-4 items-center justify-center flex-wrap w-full">
              <RangeSlider
                text="متراژ"
                label="متر"
                hidden={hasMeterageSlider}
                values={meterage}
                setValues={setMeterage}
                min={METERAGE_MIN}
                max={METERAGE_MAX}
              />
              {selectedHomeType.value === 'rent' ? (
                <>
                  <RangeSlider
                    text="رهن"
                    label="تومان"
                    values={mortgage}
                    hidden={hasMortgageSlider}
                    setValues={setMortgage}
                    min={MORTGAGE_MIN}
                    max={MORTGAGE_MAX}
                  />
                  <div className={fullMortgage ? 'hidden' : 'block'}>
                    <RangeSlider
                      text="اجاره"
                      label="تومان"
                      values={rent}
                      hidden={hasRentSlider}
                      setValues={setRent}
                      min={RENT_MIN}
                      max={RENT_MAX}
                    />
                  </div>
                </>
              ) : selectedHomeType.value === 'sell' ? (
                <RangeSlider
                  text="قیمت"
                  label="تومان"
                  values={price}
                  hidden={hasPriceSlider}
                  setValues={setPrice}
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
      <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
        <Button onClick={onClick}>جستجو</Button>
        {filters ? <Button onClick={onClearClick}>حذف فیلتر ها</Button> : null}
      </div>
    </div>
  );
};

export default FilterBar;
