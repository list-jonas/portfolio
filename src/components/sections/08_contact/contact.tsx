import React from 'react';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import ContactItem, { ContactItemProps } from './contact-item';
import BgGradient from '@/components/bg-gradient';
import Text from '@/components/text';



const Contact = () => {
  const contact: ContactItemProps[] = [{
      id: 1,
      name: "Email",
      designation: "Get in touch",
      color: "bg-red-400 dark:bg-red-500",
      href: "mailto:jonas.list.1289@gmail.com",
      element: (
        <Mail />
      )
    }, {
      id: 2,
      name: "LinkedIn",
      designation: "Connect",
      color: "bg-blue-400 dark:bg-blue-500",
      href: "https://www.linkedin.com/in/jonas-list-740230289/",
      element: (
        <Linkedin />
      )
    }, {
      id: 3,
      name: "GitHub",
      designation: "Contribute",
      color: "bg-gray-200 dark:bg-gray-900",
      href: "https://github.com/Shadowcrafter88",
      element: (
        <Github />
      )
    }
  ];

  return (
    <section id='contact' className='py-20 relative'>
      <Text size="h2" variant="h2">Get in touch!</Text>
      <div className="flex flex-row items-center justify-center my-8 w-full gap-4">
        {contact.map((item, index) => (
          <React.Fragment key={`contact-item-${index}`}>
            <ContactItem {...item} />
            {index !== contact.length - 1 && 
              <ChevronRight className="w-10 h-10" />
            }
        </React.Fragment>
        ))}
      </div>

      <BgGradient bottom={-10} left={4} size={20} color='red-500' />
    </section>
  );
};

export default Contact;