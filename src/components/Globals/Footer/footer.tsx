
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
    <footer className='bg-[#FAFAFA] rounded-lg shadow-sm'>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center" >
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="/assets/logo.svg" className="h-8" alt="Amelia bakar" />
          </a>
        </div>
        <div className="flex items-center space-between">
          <div className="flex flex-col">
            <Link itemProp='url' href='https://instagram.com/ameliabakar.se'>
              @ameliabakar.se
            </Link>
            <Link itemProp='url' href='mailto:contact@ameliabakar.se'>
              contact@ameliabakar.se
            </Link>
          </div>
          <div className="flex flex-col">
            <span>Nyhetsbrev</span>
            <input type="email" placeholder="E-mail address" className="border border-gray-300 rounded-md p-2" />
          </div>

        </div>

        <div className="w-full">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#2D2B26]">
            {menuItems.map((item: any, index: number) => {
              if (!item.uri)
                return null;

              return (
                <Link
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

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Amelia Bakar. All rights reserved
        </span>
      </div>

    </footer>
  );
}
