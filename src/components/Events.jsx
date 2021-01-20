import EventCard from "./EventCard";

import styles from "./styles/Events.module.scss";

function Events(props) {
  const { list } = props;
  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.title}>Overview - Today</div>
      <div className={styles.eventsCardContainer}>
        {list.map((e, i) => (
          <EventCard key={i} data={e} />
        ))}
      </div>
    </div>
  );
}

export default Events;
