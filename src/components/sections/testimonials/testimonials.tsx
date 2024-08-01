import Text from '@/components/text';
import React from 'react';
import Testimonial, { TestimonialItemProps } from './testimonial';
import BgGradient from '@/components/bg-gradient';
import { useTranslations } from 'next-intl';

const testimonials: TestimonialItemProps[] = [{
  companyName: 'Leder & Schuh AG',
  message: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Eget molestie diam etiam leo quam odio mattis vivamus. Augue duis cras natoque eros consequat nibh dis quam. Ullamcorper eros ex eros gravida felis tortor. Vestibulum ante ut mauris vel tortor bibendum. Nulla est et varius morbi venenatis adipiscing. Conubia duis congue varius nam condimentum aptent placerat ornare.',
  name: 'Alexander Kunert',
  role: 'Head of Digital Retail Applications',
}, {
  companyName: 'Koerbler GmbH',
  message: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia parturient ex suspendisse ad cubilia dignissim tincidunt. Dictumst taciti lacus pharetra nullam elit consectetur vel.',
  name: 'Mario Körbler',
  role: 'CEO',
}, {
  companyName: 'Koerbler GmbH',
  message: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia parturient ex suspendisse ad cubilia dignissim tincidunt. Dictumst taciti lacus pharetra nullam elit consectetur vel.',
  name: 'Mario Körbler',
  role: 'CEO',
}, {
  companyName: 'Koerbler GmbH',
  message: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia parturient ex suspendisse ad cubilia dignissim tincidunt. Dictumst taciti lacus pharetra nullam elit consectetur vel.',
  name: 'Mario Körbler',
  role: 'CEO',
}];

const Testimonials = () => {
  const t = useTranslations('Testimonials');

  return (
    <div className='py-20 container relative'>
      <Text size="h2" variant="h2">{t("title")}</Text>
      <Text size="p" className="mb-4">{t("description")}</Text>

      <div className='flex flex-col md:flex-row w-full gap-8'>
        <div className='flex flex-col w-full'>
          {/* Every 1 testimonial */}
          {testimonials.map((testimonial, index) => {
            if (index % 2 === 0) return <Testimonial key={`testimonial-${index}`} {...testimonial} />;
            return <></>;
          })}
        </div>
        <div className='flex flex-col w-full'>
          {/* Every 2 testimonial */}
          {testimonials.map((testimonial, index) => {
            if (index % 2 === 1) return <Testimonial key={`testimonial-${index}`} {...testimonial} />;
            return <></>;
          })}
        </div>
      </div>

      <BgGradient bottom={0} right={-10} size={20} color='orange-500' opacity={.1} />
    </div>
  );
};

export default Testimonials;