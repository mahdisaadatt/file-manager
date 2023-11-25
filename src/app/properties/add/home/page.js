'use client';
import { useState } from 'react';
import Input from '@/components/Input';
import ImageSelector from '@/components/ImageSelector';
import Filter from '@/components/Filter';
import CheckBox from '@/components/CheckBox';
import { homeOptions, starOptions } from '../../../../data';
import { createProperty } from '@/app/api';
import { useRouter } from 'next/navigation';
import { Formik, Form } from 'formik';

export default function AddHomePage() {
  const [selectedHomeType, setSelectedHomeType] = useState(homeOptions[0]);
  const [selectedStar, setSelectedStar] = useState(starOptions);
  const [fullRentChecked, setFullRentChecked] = useState(false);

  // Attributes
  const [hasElevator, setHasElevator] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [hasHouseware, setHasHouseware] = useState(false);
  const [hasMaster, setHasMaster] = useState(false);
  const [hasYard, setHasYard] = useState(false);
  const [hasForwardView, setHasForwardView] = useState(false);
  //

  const router = useRouter();

  const handleSubmit = async (values, actions) => {
    try {
      // createProperty('home', {values}).then()
      console.log(values);
      actions.resetForm();
      // router.push('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Formik
      initialValues={{
        title: '',
        phone: '',
        address: '',
        meterage: '',
        constructedDate: '',
        rooms: '',
        price: '',
        mortgage: '',
        rent: '',
        description: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className="p-8">
        <div className="flex flex-col w-full justify-start gap-12">
          <ImageSelector />
          <div className="flex gap-8 items-center justify-around flex-wrap w-full">
            <div className="flex gap-4 items-center tablet:justify-start justify-center flex-wrap mobile:w-auto flex-auto">
              <Filter
                dropdownTitle="نوع"
                options={homeOptions}
                selected={selectedHomeType}
                setSelectedChange={setSelectedHomeType}
              />
              <Filter
                dropdownTitle="انتخاب اولویت"
                options={starOptions}
                selected={selectedStar}
                setSelectedChange={setSelectedStar}
              />
            </div>
            {selectedHomeType.value === 'rent' ? (
              <CheckBox
                text="رهن کامل"
                id="fullRent"
                checked={fullRentChecked}
                onChange={() => setFullRentChecked(!fullRentChecked)}
              />
            ) : null}
          </div>
          <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6">
            <Input title="عنوان" id="title" name="title" />
            <Input title="شماره تلفن صاحب" id="phone" name="phone" />
            <Input title="آدرس" id="address" name="address" />
            <Input title="متراژ" id="meterage" name="meterage" />
            <Input
              title="سال ساخت"
              id="constructedDate"
              name="constructedDate"
            />
            <Input title="تعداد اتاق ها" id="rooms" name="rooms" />
            {selectedHomeType.value === 'sell' ? (
              <>
                <Input title="قیمت" id="price" name="price" />
                <Input
                  title="قیمت به ازای هر متر"
                  id="pricePerMeter"
                  name="pricePerMeter"
                />
              </>
            ) : null}
            {selectedHomeType.value === 'rent' ? (
              <>
                <Input title="رهن" id="mortgage" name="mortgage" />
                {!fullRentChecked ? (
                  <Input title="اجاره" id="rent" name="rent" />
                ) : null}
              </>
            ) : null}
          </div>
          <Input title="توضیحات" id="description" name="description" />
          <div>
            <h2 className="mb-4 font-bold text-xl">ویژگی ها</h2>
            <div className="flex mobile:flex-row flex-col mobile:items-center items-start gap-2 flex-wrap">
              <CheckBox
                text="دارای آسانسور"
                id="elevator"
                checked={hasElevator}
                onChange={() => setHasElevator(!hasElevator)}
              />
              <CheckBox
                text="پارکینگ"
                id="parking"
                checked={hasParking}
                onChange={() => setHasParking(!hasParking)}
              />
              <CheckBox
                text="انباری"
                id="houseware"
                checked={hasHouseware}
                onChange={() => setHasHouseware(!hasHouseware)}
              />
              <CheckBox
                text="حیاط"
                id="yard"
                checked={hasYard}
                onChange={() => setHasYard(!hasYard)}
              />
              <CheckBox
                text="رو به نما"
                id="forwardView"
                checked={hasForwardView}
                onChange={() => setHasForwardView(!hasForwardView)}
              />
              <CheckBox
                text="اتاق خواب مستر"
                id="master"
                checked={hasMaster}
                onChange={() => setHasMaster(!hasMaster)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-lg mt-6 hover:bg-green-700 transition"
          >
            ایجاد
          </button>
        </div>
      </Form>
    </Formik>
  );
}
