import { EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default async function Footer() {
  const menuItems: any = [
    { uri: '/', label: 'Hem' },
    { uri: '/tips', label: 'Tips' },
    { uri: '/mina-recept', label: 'Recept' },
    { uri: '/om-mig', label: 'Om mig' },
    { uri: '/bestallnigar', label: 'Beställningar' },
    { uri: '/sparade-recept', label: 'Mina sparade recept' }
  ];

  return (
    <footer className='bg-[#FAFAFA] font-light text-base"'>
      <div className="w-full max-w-screen-md mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center pb-4" >
          <a href="/" className="flex items-center rtl:space-x-reverse">
            <img src="/assets/logo.svg" className="h-16" alt="Amelia bakar" />
          </a>
        </div>

        <div className="flex items-center justify-between text-[#2D2B26] font-semibold">
          <div className="flex flex-col">
            <Link itemProp='url' href='https://instagram.com/ameliabakar.se'>
              @ameliabakar.se
            </Link>
            <Link itemProp='url' href='mailto:contact@ameliabakar.se' className='hover:text-blue'>
              <span className='inline'>
                <EnvelopeIcon className='size-4 text-grey' />
                contact@ameliabakar.se
              </span>
            </Link>
          </div>
          <div className="flex flex-col">
            <h6>Nyhetsbrev</h6>
            <input type="email" placeholder="E-mail" className="border border-gray-300 rounded-md p-2" />
          </div>

        </div>

        <div className="w-full pt-8">
          <ul className="flex flex-row flex-wrap items-center justify-between mb-6 text-sm text-[#2D2B26]">
            {menuItems.map((item: any, index: number) => {
              if (!item.uri)
                return null;
              return (
                <Link
                  className=''
                  itemProp='url'
                  href={item.uri}
                  key={index}
                  target={item.target || '_self'}>
                  <span itemProp='name'>{item.label}</span>
                </Link>
              );
            })}
          </ul>
        </div>


      </div>

      <div className='flex items-center justify-between pb-4 max-w-screen-lg mx-auto'>
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Amelia Bakar. All rights reserved
        </div>
        <div className='flex gap-4'>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Cookies
          </span>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Cookieinställningar
          </span>
        </div>
      </div>

    </footer>
  );
}
