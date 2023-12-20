'use client';
import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox';

const Rooms = ({ setRooms }) => {
  const [singleChecked, setSingleChecked] = useState(false);
  const [doubleChecked, setDoubleChecked] = useState(false);
  const [tripleChecked, setTripleChecked] = useState(false);
  const [fourChecked, setFourChecked] = useState(false);
  const [fiveChecked, setFiveChecked] = useState(false);

  useEffect(() => {
    setRooms([
      singleChecked,
      doubleChecked,
      tripleChecked,
      fourChecked,
      fiveChecked,
    ]);
  }, [singleChecked, doubleChecked, tripleChecked, fourChecked, fiveChecked]);

  return (
    <div className="flex flex-col gap-3 justify-center flex-wrap tablet:items-start items-center">
      <h2 className="font-bold text-lg">تعداد اتاق خواب</h2>
      <div className="flex items-center justify-center flex-wrap gap-2 mx-4">
        <CheckBox
          text="تک خواب"
          id="single"
          checked={singleChecked}
          onChange={() => setSingleChecked(!singleChecked)}
        />
        <CheckBox
          text="دو خواب"
          id="double"
          checked={doubleChecked}
          onChange={() => setDoubleChecked(!doubleChecked)}
        />
        <CheckBox
          text="سه خواب"
          id="triple"
          checked={tripleChecked}
          onChange={() => setTripleChecked(!tripleChecked)}
        />
        <CheckBox
          text="چهار خواب"
          id="four"
          checked={fourChecked}
          onChange={() => setFourChecked(!fourChecked)}
        />
        <CheckBox
          text="پنج خواب"
          id="five"
          checked={fiveChecked}
          onChange={() => setFiveChecked(!fiveChecked)}
        />
      </div>
    </div>
  );
};

export default Rooms;
