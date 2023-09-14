import { fireEvent, render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';

describe('Reservation form', () => {
  const availableTimes = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test('should correctly render all fields and their default values', async () => {
    render(
      <ReservationForm availableTimes={availableTimes} submitData={submitData} />
    );
    
    const fullName = screen.getByLabelText(/Full Name/);
    const userEmail = screen.getByLabelText(/Email/);
    const dateInput = screen.getByLabelText(/Choose date/);
    const timeSelect = screen.getByLabelText(/Choose time/);
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const submitButton = screen.getByRole('button');

    expect(fullName).toBeInTheDocument();
    expect(fullName).toHaveAttribute('type', 'text');
    expect(fullName).toHaveValue('');

    expect(userEmail).toBeInTheDocument();
    expect(userEmail).toHaveAttribute('type', 'email');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'res_time');

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test('should successfully submit form with default values', () => {
    render(
      <ReservationForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({ 
      name: '',
      email: '',
      date: today, 
      time: availableTimes[0], 
      guests: 1, 
      occasion: 'Birthday', 
    });
  });

});