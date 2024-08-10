import './index.css'

const EventItem = ({eventDetail, onClick}) => {
  const {imageUrl, name, location} = eventDetail

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClick}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
