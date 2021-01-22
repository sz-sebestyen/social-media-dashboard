import MapSocials from "./MapSocials";

import {
  eventCardWrapper,
  type,
  platformIcon,
  amount,
  modifier,
  green,
  red,
} from "./styles/EventCard.module.scss";

function EventCard(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={eventCardWrapper}>
      <div className={type}>{data.type}</div>
      <img
        src={MapSocials(data.platform)}
        alt={data.platform + " icon"}
        className={platformIcon}
        width="20px"
      />
      <div className={amount}>{data.amount}</div>
      <div className={`${modifier} ${data.modifier > 0 ? green : red}`}>
        {data.modifier > 0 ? "⏶" : "⏷"} {Math.abs(data.modifier)}%
      </div>
    </div>
  );
}

export default EventCard;
