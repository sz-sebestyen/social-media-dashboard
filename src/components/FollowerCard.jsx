import MapSocials from "./MapSocials";

function FollowerCard(props) {
	const {data} = props;
	const mediaKey = Object.keys(data)[0];
	const stats = data[mediaKey];

	return (
		<div className="follower-card-wrapper">
			<img src={MapSocials(mediaKey)} alt={mediaKey + " icon"} className="platform-icon" width="30px"/>
			<div className="name">{(mediaKey !== "youtube" ? "@" : "") + stats.name}</div>
			<div className="value">{stats.followers}</div>
			<div>followers</div>
			<div className="change">{stats.difference}</div>
		</div>
	);
}

export default FollowerCard;
