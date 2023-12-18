'use client';
import React, { useEffect, useState } from 'react';
import CheckBox from '../CheckBox';
import DropDown from './DropDown';

const Attributes = ({ setAttributes }) => {
  const [hasElevator, setHasElevator] = useState({
    checked: true,
    value: 'آسانسور',
  });
  const [hasParking, setHasParking] = useState({
    checked: true,
    value: 'پارکینگ',
  });
  const [hasHouseware, setHasHouseware] = useState({
    checked: true,
    value: 'انباری',
  });
  const [hasMaster, setHasMaster] = useState({
    checked: true,
    value: 'اتاق خواب مستر',
  });
  const [hasYard, setHasYard] = useState({ checked: true, value: 'حیاط' });
  const [hasForwardView, setHasForwardView] = useState({
    checked: true,
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
    <DropDown title="ویژگی ها">
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
          setHasMaster({ checked: !hasMaster.checked, value: 'اتاق خواب مستر' })
        }
      />
    </DropDown>
  );
};

export default Attributes;
