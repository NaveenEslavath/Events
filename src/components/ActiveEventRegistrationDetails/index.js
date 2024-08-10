import './index.css'

const registrationStatusContent = {
  YET_TO_REGISTER: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-register-img.png',
    imageAlt: 'yet to register',
    description:
      'A live performance brings so much to your relationship with dance',
    button: 'Register Here',
  },
  REGISTERED: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-regestered-img.png',
    imageAlt: 'registered',
    heading: 'You have already registered for the event',
  },
  REGISTRATIONS_CLOSED: {
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png',
    imageAlt: 'registrations closed',
    heading: 'Registrations Are Closed Now!',
    description: 'Stay tuned. We will reopen',
  },
}

const ActiveEventRegistrationDetails = ({activeView}) => {
  const content = registrationStatusContent[activeView]

  return (
    <div className="active-event-details">
      {activeView === 'NO_ACTIVE_EVENT' && (
        <p>Click on an event, to view its registration details</p>
      )}
      {content && (
        <>
          <img
            src={content.imageUrl}
            alt={content.imageAlt}
            className="view-image"
          />
          {content.heading && <h1>{content.heading}</h1>}
          {content.description && <p>{content.description}</p>}
          {content.button && <button type="button">{content.button}</button>}
        </>
      )}
    </div>
  )
}

export default ActiveEventRegistrationDetails
