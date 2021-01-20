import MapSocials from "./MapSocials";

import styles from "./styles/FollowerCard.module.scss";

function FollowerCard(props) {
  const { data } = props;
  const mediaKey = Object.keys(data)[0];
  const stats = data[mediaKey];

  return (
    <div className={styles.followerCardWrapper}>
      <div className={styles.topLine}></div>
      <div className={styles.contactWrapper}>
        <img
          src={MapSocials(mediaKey)}
          alt={mediaKey + " icon"}
          className={styles.platformIcon}
          width="30px"
        />
        <span className={styles.name}>
          {(mediaKey !== "youtube" ? "@" : "") + stats.name}
        </span>
      </div>
      <div className={styles.value}>{stats.followers}</div>
      <div className={styles.followers}>followers</div>
      <div className={styles.change}>{Math.abs(stats.difference)} Today</div>
    </div>
  );
}

export default FollowerCard;
