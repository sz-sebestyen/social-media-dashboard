import FollowerCard from "./FollowerCard";

import styles from "./styles/Platforms.module.scss";

function Platforms(props) {
  const { list } = props;
  console.log(list);

  const fs = list
    .map((e) => {
      const key = Object.keys(e)[0];
      return e[key].followers;
    })
    .reduce((acc, cur) => acc + cur);

  return (
    <div className={styles.platformsWrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Social Media Dashboard</div>
        <div className={styles.totalFollowers}>
          Total Followers: {fs.toLocaleString()}
        </div>
      </div>
      <div className={styles.settingWrapper}>
        <input
          type="checkbox"
          name="colorTheme"
          id="colorTheme"
          className={styles.themeCheck}
        />
        <label htmlFor="colorTheme" className={styles.ctLabel}></label>
      </div>
      <div className={styles.followersCardContainer}>
        {list.map((e, i) => (
          <FollowerCard key={i} data={e} />
        ))}
      </div>
    </div>
  );
}

export default Platforms;
