import Text from '@/components/text';
import React from 'react';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('About');

  return (
    <section className='py-20 container'>
      <Text size="h2" variant="h2">{t('title')}</Text>
      <Text size="p" className="mb-4">
        {t('introduction')} <Text variant="gradient">{t('student')}</Text> {t('from')} <Text variant="gradient">{t('country')}</Text>. {t('education')} <Text variant="gradient">{t('school')}</Text>, {t('specialization')}
      </Text>
      <Text size="p" className="mb-4">
        {t('passion')}
      </Text>
      <Text size="p" className="mb-4">
        {t('callToAction')}
      </Text>
    </section>
  );
};

export default About;