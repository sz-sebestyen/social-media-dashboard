import MapSocials from "./MapSocials";

import styles from "./styles/FollowerCard.module.scss";

function FollowerCard(props) {
  const { data } = props;
  const mediaKey = Object.keys(data)[0];
  const stats = data[mediaKey];

  return (
    <div className={styles.followerCardWrapper}>
      <div className={`${styles.topLine} ${styles[mediaKey]}`}></div>
      <div className={styles.contactWrapper}>
        <img
          src={MapSocials(mediaKey)}
          alt={mediaKey + " icon"}
          className={styles.platformIcon}
          width="20px"
        />
        <span className={styles.name}>
          {(mediaKey !== "youtube" ? "@" : "") + stats.name}
        </span>
      </div>
      <div className={styles.value}>{stats.followers}</div>
      <div className={styles.followers}>FOLLOWERS</div>
      <span
        className={`${styles.change} ${
          stats.difference > 0 ? styles.green : styles.red
        }`}
      >
        {stats.difference > 0 ? "⏶" : "⏷"} {Math.abs(stats.difference)} Today
      </span>
    </div>
  );
}

export default FollowerCard;
