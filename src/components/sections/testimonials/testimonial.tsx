import Text from '@/components/text';
import React from 'react';

export interface TestimonialItemProps {
  companyLogo?: string;
  companyName: string;
  message: string;
  name: string;
  role: string;
}

const Testimonial = ({companyLogo, companyName, message, name, role}: TestimonialItemProps) => {
  return (
    <div className='rounded-3xl border p-4 sm:p-8 xl:p-10 m-2 w-full flex flex-col gap-8'>
      <div>
        <h3 className='text-lg font-bold'>{companyName}</h3>
      </div>
      <Text size='p'>&quot;{message}&quot;</Text>
      <div>
        <h4 className='text-lg font-medium'>{name}</h4>
        <p className='text-sm text-secondary-foreground'>{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;