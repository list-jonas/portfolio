import Text from '@/components/text';
import React from 'react';

const About = () => {
  return (
    <section className='py-20'>
      <Text size="h2" variant="h2">About me</Text>
      <Text size="p">
        Hi there! I&apos;m a computer science student and software engineer based in <Text variant="gradient">Austria</Text>. 
        I specialize in building websites and applications that are fast, accessible, and responsive.
      </Text>
    </section>
  );
};

export default About;