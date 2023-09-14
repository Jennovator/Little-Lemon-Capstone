import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedReservation = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCalendarCheck} size="8x" className='confirmation-icon'/>
      <h2>Your reservation has been confirmed.</h2>
      <p><strong>An email containing all the information will be sent to you shortly. </strong></p>
      <p>Thank you for booking at Little Lemon, see you soon.</p>
    </div>
  );
};

export default ConfirmedReservation;