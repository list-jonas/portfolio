import React from 'react';
import { ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import ContactItem, { ContactItemProps } from './contact-item';
import Text from '@/components/text';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/locales';
import Link from 'next/link';

const Contact = () => {
  const t = useTranslations('Contact');

  const contact: ContactItemProps[] = [{
      id: 1,
      name: "Email",
      designation: t('emailDesignation'),
      color: "bg-red-400 dark:bg-red-500",
      href: "mailto:jonas.list.1289@gmail.com",
      element: (
        <Mail />
      )
    }, {
      id: 2,
      name: "LinkedIn",
      designation: t('linkedinDesignation'),
      color: "bg-blue-400 dark:bg-blue-500",
      href: "https://www.linkedin.com/in/jonas-list-740230289/",
      element: (
        <Linkedin />
      )
    }, {
      id: 3,
      name: "GitHub",
      designation: t('githubDesignation'),
      color: "bg-gray-200 dark:bg-gray-900",
      href: "https://github.com/Shadowcrafter88",
      element: (
        <Github />
      )
    }
  ];

  return (
    <footer id='contact' className='py-20 relative bg-secondary'>
      <div className='container'>
        <Text size="h2" variant="h2">{t('title')}</Text>
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
        <div className='flex flex-row justify-between'>
          <Text>{t('copyright')}</Text>
          <div className='flex flex-row'>
            {locales.map((lang) => (
              <Link key={lang.key} href={`/${lang.key}`} locale={lang.key} scroll={false} className='cursor-pointer'>
                <lang.icon className='h-4 rounded-sm mr-2' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;