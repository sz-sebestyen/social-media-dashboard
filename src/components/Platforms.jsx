import FollowerCard from './FollowerCard';

function Platforms(props) {
	//console.log(props);
	const {list} = props;
	return (
		<div className="platforms-wrapper">
			<div className="header">
				<div className="title">Social Media Dashboard</div>
				<div className="total-followers">Total Followers:</div>
				<label htmlFor="color-theme">Dark Mode</label>
				<input type="checkbox" name="color-theme" id="color-theme"/>
			</div>
			<div className="followers-card-container">
				{list.map((e, i) => <FollowerCard key={i} data={e}/>)}
			</div>
		</div>
	);
}

export default Platforms;
