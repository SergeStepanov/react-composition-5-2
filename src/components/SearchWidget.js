import React from 'react';
import Link from './generic/Link';
import List from './generic/List';
import ListItem from './generic/ListItem';
import Input from './generic/Input';
import Button from './generic/Button';
import { nanoid } from 'nanoid';

/**
 * Формирует и выводит строку поиска
 */

export default function SearchWidget({ inputTop }) {
  return (
    <div className='search'>
      <div className='search-logo'>
        <Link href='#0'>Яндекс</Link>
      </div>
      <div>
        <List className='row' items={inputTop}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()} className='col'>
                <Link href='#0'>{item}</Link>
              </ListItem>
            ))
          }
        </List>
        <form>
          <Input type='text' name='name' style={{ width: '70%' }} required />
          <Button className='btn'>Найти</Button>
          <label className='w-100' htmlFor='name'>
            Найдется все. Например, фаза луны сегодня
          </label>
        </form>
      </div>
    </div>
  );
}
