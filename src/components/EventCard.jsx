import MapSocials from "./MapSocials";

function EventCard(props) {
	const {data} = props;
	return (
		<div className="event-card-wrapper">
			<div className="type">{data.type}</div>
			<img src={MapSocials(data.platform)} alt={data.platform + " icon"} className="platform-icon" width="30px"/>
			<div className="amount">{data.amount}</div>
			<div className="modifier">{Math.abs(data.modifier)}</div>
		</div>
	);
}

export default EventCard;
