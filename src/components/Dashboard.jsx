import Platforms from './Platforms';
import Events from './Events';

import styles from './styles/Dashboard.module.scss';

function Dashboard(props) {
	const {data} = props;
	return (
		<div className={styles.dashboardWrapper}>
			<div className={styles.backgroundTop}></div>
			<div className={styles.dashboardContent}>
				<Platforms list={data.platforms}/>
				<Events list={data.events}/>
			</div>
		</div>
	);
}

export default Dashboard;
