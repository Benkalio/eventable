import Link from 'next/link';
import React from 'react';
import classes from './event-item.module.css';
import Button from '../ui/button';
import CalendarIcon from '../icons/calendar';
import Address from '../icons/address';
import ArrowRightIcon from '../icons/arrow-right';

function EventItem(props: any) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <div>
      <li className={classes.item}>
        <img src={'/' + image} alt={title} />
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
              <CalendarIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={classes.address}>
              <Address />
              <address>Address</address>
            </div>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink}>
              <span>Explore Events</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default EventItem;
