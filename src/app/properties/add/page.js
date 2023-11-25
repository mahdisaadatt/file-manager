'use client';
import LinkButton from '@/components/LinkButton';

export default function AddPropertyPage() {
  return (
    <div className='p-4 flex flex-col items-center justify-center'>
      <h2 className='text-xl'>نوع دارایی رو مشخص کن</h2>
      <div className="flex flex-wrap gap-4 m-4">
        <LinkButton href="/properties/add/home" textLink="خانه" />
        <LinkButton href="/properties/add/car" textLink="ماشین" />
        <LinkButton href="/properties/add/other" textLink="متفرقه" />
      </div>
    </div>
  );
}
