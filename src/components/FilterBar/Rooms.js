'use client';
import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox';
import DropDown from './DropDown';

const Rooms = ({ setRooms }) => {
  const [singleChecked, setSingleChecked] = useState({
    checked: true,
    value: 1,
  });
  const [doubleChecked, setDoubleChecked] = useState({
    checked: true,
    value: 2,
  });
  const [tripleChecked, setTripleChecked] = useState({
    checked: true,
    value: 3,
  });
  const [fourChecked, setFourChecked] = useState({ checked: true, value: 4 });
  const [fiveChecked, setFiveChecked] = useState({ checked: true, value: 5 });

  useEffect(() => {
    setRooms([
      singleChecked.checked ? singleChecked.value : null,
      doubleChecked.checked ? doubleChecked.value : null,
      tripleChecked.checked ? tripleChecked.value : null,
      fourChecked.checked ? fourChecked.value : null,
      fiveChecked.checked ? fiveChecked.value : null,
    ]);
  }, [singleChecked, doubleChecked, tripleChecked, fourChecked, fiveChecked]);

  return (
    <DropDown title="تعداد خواب ها">
      <CheckBox
        text="تک خواب"
        id="single"
        checked={singleChecked.checked}
        onChange={() =>
          setSingleChecked({ checked: !singleChecked.checked, value: 1 })
        }
      />
      <CheckBox
        text="دو خواب"
        id="double"
        checked={doubleChecked.checked}
        onChange={() =>
          setDoubleChecked({ checked: !doubleChecked.checked, value: 2 })
        }
      />
      <CheckBox
        text="سه خواب"
        id="triple"
        checked={tripleChecked.checked}
        onChange={() =>
          setTripleChecked({ checked: !tripleChecked.checked, value: 3 })
        }
      />
      <CheckBox
        text="چهار خواب"
        id="four"
        checked={fourChecked.checked}
        onChange={() =>
          setFourChecked({ checked: !fourChecked.checked, value: 4 })
        }
      />
      <CheckBox
        text="پنج خواب"
        id="five"
        checked={fiveChecked.checked}
        onChange={() =>
          setFiveChecked({ checked: !fiveChecked.checked, value: 5 })
        }
      />
    </DropDown>
  );
};

export default Rooms;
