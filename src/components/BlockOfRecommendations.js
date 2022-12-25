import React from 'react';
import Widget from './Widget';
import Link from './generic/Link';
import List from './generic/List';
import ListItem from './generic/ListItem';
import { nanoid } from 'nanoid';

/**
 * Формирует блок виджетов
 */

export default function BlockOfRecommendations({program, visited, broadcast }) {
  return (
    <div className='row'>
      <Widget className='col-4' title={<Link href='#0'>Погода</Link>}>
        <p>Какой-то прогноз погоды</p>
      </Widget>

      <Widget className='col-4' title={<Link href='#0'>Карта Германии</Link>}>
        {<Link href='#0'>Расписание</Link>}
      </Widget>

      <Widget className='col-4' title={<Link href='#0'>Эфир</Link>}>
        <List items={broadcast}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()}>
                <Link href={item.link}>{`${item.title} ${item.channel}`}</Link>
              </ListItem>
            ))
          }
        </List>
      </Widget>

      <Widget className='col-4' title={<Link href='#0'>Посещаемое</Link>}>
        <List className='row' items={visited}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()}>
                <Link href='#0'>{item}</Link>
              </ListItem>
            ))
          }
        </List>
      </Widget>

      <Widget className='col-4' title={<Link href='#0'>Телепрограмма</Link>}>
        <List items={program}>
          {(items) =>
            items.map((item) => (
              <ListItem key={nanoid()}>
                <Link href={item.link}>{`${item.title} ${item.channel}`}</Link>
              </ListItem>
            ))
          }
        </List>
      </Widget>
    </div>
  );
}


