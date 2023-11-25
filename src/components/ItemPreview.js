import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';
import noImageIcon from '../app/assets/images/no_image-icon.svg';

const ItemPreview = ({ data }) => {
  const date = new Date(data?.createdAt).toLocaleDateString('fa-IR');
  const time = new Date(data?.createdAt).toLocaleTimeString('fa-IR');
  return (
    <Link
      href={`/properties/${data?.type.toLowerCase()}/${data?.id}`}
      className="flex wide:flex-row flex-col gap-4 hover:bg-gray-300 border-2 border-gray-300 transition px-4 py-8 rounded-lg"
    >
      {data?.cover ? (
        <Image
          alt={data?.title}
          src={data?.cover}
          width={500}
          height={500}
          priority
          className="rounded-lg shadow-xl tablet:w-full tablet:h-56 desktop:h-80 wide:w-72 wide:h-full w-full"
        />
      ) : (
        <Image
          alt="فاقد عکس"
          src={noImageIcon}
          width={500}
          height={500}
          loading="lazy"
          className="rounded-lg shadow-xl tablet:w-full tablet:h-56 desktop:h-80 wide:w-72 wide:h-full w-full"
        />
      )}

      <div className="flex flex-col gap-2 my-2 w-full">
        <div className="flex items-center justify-between gap-8">
          <h2 className="font-extrabold text-xl">{data?.title}</h2>
          <div className="flex flex-col items-center gap-1">
            <span className="text-gray-500 text-xs text-center">
              {time} {date}
            </span>
            <Badge star={data?.score} />
          </div>
        </div>
        <div className="flex flex-col justify-center my-4 gap-1">
          {data?.type === 'Home' ? (
            <>
              {data?.homeType === 'فروش' ? (
                <>
                  <p className="font-semibold">قیمت : {data?.price}</p>
                  <p className="font-semibold">
                    قیمت به ازای هر متر مکعب : {data?.pricePerMeter}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold">رهن : {data?.mortgage}</p>
                  <p className="font-semibold">اجاره : {data?.rent}</p>
                </>
              )}
            </>
          ) : (
            <p className="font-semibold">قیمت : {data?.price}</p>
          )}
          <p>آدرس : {data?.address}</p>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap w-64">
            توضیحات : {data?.description}
          </p>
        </div>
        <p className="text-sm">ایجاد کننده : {data?.author.first_name}</p>
      </div>
    </Link>
  );
};

export default ItemPreview;
