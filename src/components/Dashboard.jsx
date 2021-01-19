import Platforms from './Platforms';
import Events from './Events';

function Dashboard(props) {
	const {data} = props;
	return (
		<div className="dashboard-wrapper">
			<div className="background-top"></div>
			<div className="dashboard-content">
				<Platforms list={data.platforms}/>
				<Events list={data.events}/>
			</div>
		</div>
	);
}

export default Dashboard;
