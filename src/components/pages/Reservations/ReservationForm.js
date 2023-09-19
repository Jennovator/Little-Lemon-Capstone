import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ReservationForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
    const form = useRef();
    const minimumDate = new Date().toISOString().split('T')[0];
    const defaultTime = availableTimes[0];
    const occasions = ['Birthday', 'Anniversary'];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState(defaultTime);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState(occasions[0]);
    const [instruction, setInstruction] = useState("No additional Instruction");

    const handleDateChange = e => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    const isNameValid = () => name !== '';
    const isEmailValid = () => email !== '';
    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isGuestsValid = () => guests !== '';
    const isOccasionValid = () => occasion !== '';

    const areAllFieldsValid = () => {
        return (
            isNameValid() &&
            isEmailValid() &&
            isDateValid() &&
            isTimeValid() &&
            isGuestsValid() &&
            isOccasionValid()
        );
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        submitData({ name, email, date, time, guests, occasion, instruction });
        emailjs.sendForm('service_hih186i', 'template_c00it34', form.current, '9HgczSqOISTnc0Vix')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={handleFormSubmit} data-testid="reservation-form">
            <label htmlFor="user_name">Full Name</label>
            <input type="text" id="user_name" name="user_name" value={name} onChange={e => setName(e.target.value)} required aria-label="Full Name" />

            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" value={email} onChange={e => setEmail(e.target.value)} required aria-label="Email" />

            <label htmlFor="res_date">Choose date</label>
            <input type="date" id="res_date" name="res_date" value={date} onChange={handleDateChange} required aria-label="Choose date" />

            <label htmlFor="res_time">Choose time</label>
            <select id="res_time" name="res_time" value={time} onChange={handleTimeChange} required aria-label="Choose time">
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime} data-testid="booking-time-options">
                        {availableTime}
                    </option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={guests} onChange={e => setGuests(e.target.value)} required aria-label="Number of guests" />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required aria-label="Occasion">
                {occasions.map(occasion =>
                    <option data-testid="booking-occasion-option" key={occasion}>
                        {occasion}
                    </option>
                )}
            </select>

            <label htmlFor="instruction">Additional Instructions</label>
            <textarea id="instruction" name="instruction" cols="30" rows="10" value={instruction} onChange={e => setInstruction(e.target.value)} aria-label="Additional Instructions" />

            <button className="button-primary" type="submit" disabled={!areAllFieldsValid()}>Make your Reservation</button>
        </form>

    );
};

export default ReservationForm;