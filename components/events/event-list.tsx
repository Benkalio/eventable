import React from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props: { items: any }) {
  const { items } = props;

  return (
    <div>
      <ul className={classes.list}>
        {items.map((event: any) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default EventList;
