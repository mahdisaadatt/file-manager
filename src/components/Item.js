'use client';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import LinkButton from './LinkButton';
import Badge from './Badge';
import { UserContext } from '@/context/UserContext';
import noImageIcon from '../app/assets/images/no_image-icon.svg';
import { deleteProperty } from '@/app/api';
import { useRouter } from 'next/navigation';

const Item = ({ data }) => {
  const { user } = useContext(UserContext);
  const [attributes, setAttributes] = useState([]);
  const router = useRouter();
  const date = new Date(data?.createdAt).toLocaleDateString('fa-IR');
  const time = new Date(data?.createdAt).toLocaleTimeString('fa-IR');

  useEffect(() => {
    if (Array.isArray(data?.attributes)) {
      setAttributes(data?.attributes);
    } else {
      setAttributes([data?.attributes]);
    }
  }, [data]);

  const onDeleteClick = async () => {
    deleteProperty(data?.type?.toLowerCase(), data?.id).then(() =>
      router.push('/')
    );
  };

  const attributesList = attributes?.map((attribute, index) => {
    return (
      <span
        key={index}
        className="px-6 py-2 border-2 border-cyan-500 rounded-lg"
      >
        {attribute}
      </span>
    );
  });

  return (
    <div className="mobile:p-6 p-2 w-full">
      <div className="flex desktop:flex-row-reverse flex-col desktop:items-start items-center justify-between w-full gap-4">
        <div className="flex flex-col items-center justify-center desktop:w-3/4 w-full">
          {data?.cover ? (
            <Image
              src={data?.cover}
              alt={data?.title}
              width={500}
              height={500}
              priority
              className="rounded-md shadow-xl mobile:h-[300px] w-full h-full"
            />
          ) : (
            <Image
              alt="فاقد عکس"
              src={noImageIcon}
              width={500}
              height={500}
              loading="lazy"
              className="rounded-md shadow-xl mobile:h-[300px] w-full h-full"
            />
          )}
          <div className="flex items-start bg-white shadow-2xl rounded-lg p-4 mt-8 w-full gap-6 justify-around flex-wrap">
            <LinkButton
              href={`/user/${data?.author?.username}`}
              text="ایجاد کننده"
              textLink={data?.author?.first_name}
            />
            <LinkButton
              href={`/properties/${data?.type?.toLowerCase()}`}
              text="دسته"
              textLink={
                data?.type === 'Home'
                  ? 'خانه'
                  : data?.type === 'Car'
                  ? 'ماشین'
                  : 'متفرقه'
              }
            />
          </div>
        </div>
        <div className="flex flex-col items-start bg-white shadow-2xl rounded-lg p-8 w-full">
          <div className="flex gap-2 justify-between w-full items-center">
            <h2 className="font-bold text-xl">{data?.title}</h2>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-400">
                {time} {date}
              </span>
              <Badge star={data?.score} />
            </div>
          </div>
          <div className="flex flex-col justify-start mt-8">
            {data?.type === 'Home' ? (
              <>
                {data?.homeType === 'فروش' ? (
                  <>
                    <p>قیمت : {data?.price}</p>
                    <p>قیمت به ازای هر متر مکعب : {data?.pricePerMeter}</p>
                  </>
                ) : (
                  <>
                    <p>رهن : {data?.mortgage}</p>
                    <p>اجاره : {data?.rent}</p>
                  </>
                )}
                <p>سال ساخت : {data?.constructedDate}</p>
                <p>تعداد اتاق خواب : {data?.rooms}</p>
              </>
            ) : data?.type === 'Car' ? (
              <>
                <p>قیمت : {data?.price}</p>
                <p>سال ساخت : {data?.dateModel}</p>
                <p>گیر بکس: {data?.gearbox}</p>
                <p>وضعیت موتور : {data?.motorStation}</p>
                <p>کارکرد : {data?.operation}</p>
              </>
            ) : (
              <p>قیمت : {data?.price}</p>
            )}
            <div className="mt-3">
              <p>آدرس : {data?.address}</p>
              <p>شماره تلفن : {data?.ownersPhone}</p>
            </div>
          </div>
          <div className="mt-8 w-full">
            {data?.attributes ? (
              <>
                <h3 className="mb-2 font-black text-lg">ویژگی ها</h3>
                <div className="flex flex-wrap gap-2">{attributesList}</div>
              </>
            ) : null}
          </div>
          <div className="mt-8">
            <h3 className="font-black text-lg">توضیحات</h3>
            <p className="overflow-clip">{data?.description}</p>
          </div>
          {user?.username === data?.author?.username ? (
            <button
              onClick={onDeleteClick}
              className="px-8 py-3 self-end bg-red-600 text-white rounded-lg mt-6 hover:bg-red-700 transition"
            >
              حذف
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Item;
