import React from 'react';
import Link from './generic/Link';
import List from './generic/List';
import ListItem from './generic/ListItem';
import { nanoid } from 'nanoid';

export default function NewsBlock({ newsWidget, currencyWidget }) {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='navbar-nav'>
          <Link href='#0' className='nav-item nav-link active'>
            Сейчас в сми
          </Link>
          <Link href='#0' className='nav-item nav-link'>
            В Гемании
          </Link>
          <Link href='#0' className='nav-item nav-link'>
            Рекомендуем
          </Link>
        </div>
      </nav>

      <List className='row' items={newsWidget}>
        {(items) =>
          items.map((item) => (
            <ListItem key={nanoid()} className='col-12'>
              <Link href={item.link}>{`${item.logo} ${item.title}`}</Link>
            </ListItem>
          ))
        }
      </List>

      <List className='row' items={currencyWidget}>
        {(items) =>
          items.map((item) => (
            <ListItem
              className='col-3'
              key={nanoid()}>{`${item.currency} ${item.amount}`}</ListItem>
          ))
        }
      </List>
    </div>
  );
}
