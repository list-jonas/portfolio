import Text from '@/components/text';
import React from 'react';

const About = () => {
  return (
    <section className='py-20 container'>
      <Text size="h2" variant="h2">About Me</Text>
      <Text size="p" className="mb-4">
        Hello! I&apos;m a passionate <Text variant="gradient">computer science student</Text> and aspiring software engineer from <Text variant="gradient">Austria</Text>. I&apos;m currently in my 5th and final year at <Text variant="gradient">HTBLA Kaindorf</Text>, specializing in web development and software engineering.
      </Text>
      <Text size="p" className="mb-4">
        I love coding and problem-solving, and I enjoy creating fast, accessible, and responsive websites. I&apos;m always eager to learn new technologies and enhance my skills.
      </Text>
      <Text size="p" className="mb-4">
        If you&apos;re looking for someone passionate about technology, let&apos;s connect!
      </Text>
    </section>
  );
};

export default About;