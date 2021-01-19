import EventCard from './EventCard';

function Events(props) {
	const {list} = props;
	return (
		<div className="events-wrapper">
			<div className="title">Overview - Today</div>
			<div className="events-card-container">
				{list.map((e,i) => <EventCard key={i} data={e}/>)}
			</div>
		</div>
	);
}

export default Events;
