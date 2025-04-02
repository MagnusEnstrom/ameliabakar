
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
    <footer>
      {menuItems.map((item: any, index: number) => {
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
      <div>Copyright © {new Date().getFullYear()} Amelia Bakar. All rights reserved</div>
    </footer>
  );
}
