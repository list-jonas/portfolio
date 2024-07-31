import React from 'react';
import BgGradient from '@/components/bg-gradient';
import Text from '@/components/text';

const Hero = () => {
  return (
    <header className='relative py-20 container'>
      <Text size="h1">
        I&apos;m <Text variant="gradient" className='font-medium'>Jonas List</Text>,
        <br />
        Designer & Developer.
      </Text>

      <BgGradient top={8} right={-5} size={20} color="red-500" opacity={.1} />
      <BgGradient top={5} left={1} size={15} color="orange-500" opacity={.2} />
    </header>
  );
};

export default Hero;