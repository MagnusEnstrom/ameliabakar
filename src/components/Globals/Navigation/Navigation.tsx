import Link from 'next/link';
//import Logo from '@/public/assets/logo.svg';
import { print } from 'graphql/language/printer';
import SearchForm from '@/components/Globals/Navigation/SearchForm';
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
    <nav
      className={styles.navigation}
      role='navigation'
      itemScope
      itemType='http://schema.org/SiteNavigationElement'
    >
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
      <SearchForm />
    </nav>
  );
}
