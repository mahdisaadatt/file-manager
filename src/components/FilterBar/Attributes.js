'use client';
import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox';

const Attributes = ({ setAttributes }) => {
  const [hasElevator, setHasElevator] = useState({
    checked: false,
    value: 'آسانسور',
  });
  const [hasParking, setHasParking] = useState({
    checked: false,
    value: 'پارکینگ',
  });
  const [hasHouseware, setHasHouseware] = useState({
    checked: false,
    value: 'انباری',
  });
  const [hasMaster, setHasMaster] = useState({
    checked: false,
    value: 'اتاق خواب مستر',
  });
  const [hasYard, setHasYard] = useState({ checked: false, value: 'حیاط' });
  const [hasForwardView, setHasForwardView] = useState({
    checked: false,
    value: 'رو به نما',
  });

  useEffect(() => {
    setAttributes([
      hasElevator.checked ? hasElevator.value : null,
      hasParking.checked ? hasParking.value : null,
      hasHouseware.checked ? hasHouseware.value : null,
      hasMaster.checked ? hasMaster.value : null,
      hasYard.checked ? hasYard.value : null,
      hasForwardView.checked ? hasForwardView.value : null,
    ]);
  }, [
    hasElevator,
    hasParking,
    hasHouseware,
    hasMaster,
    hasYard,
    hasForwardView,
  ]);

  return (
    <div className="flex flex-col gap-3 justify-center flex-wrap tablet:items-start items-center">
      <h2 className="font-bold text-lg">ویژگی ها</h2>
      <div className="flex items-center justify-center flex-wrap gap-2 mx-4">
        <CheckBox
          text="آسانسور"
          id="elevator"
          checked={hasElevator.checked}
          onChange={() =>
            setHasElevator({ checked: !hasElevator.checked, value: 'آسانسور' })
          }
        />
        <CheckBox
          text="پارکینگ"
          id="parking"
          checked={hasParking.checked}
          onChange={() =>
            setHasParking({ checked: !hasParking.checked, value: 'پارکینگ' })
          }
        />
        <CheckBox
          text="انباری"
          id="houseware"
          checked={hasHouseware.checked}
          onChange={() =>
            setHasHouseware({ checked: !hasHouseware.checked, value: 'انباری' })
          }
        />
        <CheckBox
          text="حیاط"
          id="yard"
          checked={hasYard.checked}
          onChange={() =>
            setHasYard({ checked: !hasYard.checked, value: 'حیاط' })
          }
        />
        <CheckBox
          text="رو به نما"
          id="forwardView"
          checked={hasForwardView.checked}
          onChange={() =>
            setHasForwardView({
              checked: !hasForwardView.checked,
              value: 'رو به نما',
            })
          }
        />
        <CheckBox
          text="اتاق خواب مستر"
          id="master"
          checked={hasMaster.checked}
          onChange={() =>
            setHasMaster({
              checked: !hasMaster.checked,
              value: 'اتاق خواب مستر',
            })
          }
        />
      </div>
    </div>
  );
};

export default Attributes;
