import Link from 'next/link';
//import Logo from '@/public/assets/logo.svg';
import { print } from 'graphql/language/printer';
import SearchForm from '@/components/Globals/Navigation/searchForm';
import styles from './Navigation.module.css';

import { MenuItem, RootQueryToMenuItemConnection } from '@/gql/graphql';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import gql from 'graphql-tag';

async function getData() {
  const menuQuery = gql`
    query MenuQuery {
      menuItems(where: { location: FOOTER }) {
        nodes {
          uri
          target
          label
        }
      }
    }
  `;

  const { menuItems } = await fetchGraphQL<{
    menuItems: RootQueryToMenuItemConnection;
  }>(print(menuQuery));

  if (menuItems === null) {
    throw new Error('Failed to fetch data');
  }

  return menuItems;
}

export default async function Navigation() {
  const menuItems: any = [
    { uri: '/mina-recept', label: 'Recept' },
    { uri: '/om-mig', label: 'Om mig' },
    { uri: '/tips', label: 'Tips' },
    { uri: '/bestallnigar', label: 'Beställningar' }
  ];

  return (
    <nav className='header-nav' role='navigation' itemScope itemType='http://schema.org/SiteNavigationElement'>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {menuItems.map((item: MenuItem, index: number) => {
                  if (!item.uri) return null;

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
              </div>

            </div>
            <div className="flex shrink-0 items-center">
              <Link itemProp='url' href='/'>
                <img className="h-8 w-auto" src="/assets/logo.svg" alt="Amelia bakar" />
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <SearchForm />
            <Link itemProp='url' href='/mina-recept' key='abc123'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {menuItems.map((item: MenuItem, index: number) => {
            if (!item.uri) return null;

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
        </div>

        <SearchForm />
      </div>
    </nav>
  );
}
