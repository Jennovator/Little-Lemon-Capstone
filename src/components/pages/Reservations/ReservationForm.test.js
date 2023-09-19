import { fireEvent, render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';

describe('Reservation form', () => {
  const availableTimes = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
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
    expect(submitButton).toHaveAttribute('disabled'); // Ensure the button has the "disabled" attribute
  });

  test('should successfully submit form with default values', () => {
    render(
      <ReservationForm availableTimes={availableTimes} submitData={submitData} />
    );

    // Set valid values for the form fields
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });

    // Assert that the button is enabled after setting valid values
    const submitButton = screen.getByText('Make your Reservation');
    expect(submitButton).toBeEnabled();

    // Simulate form submission
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      date: today,
      time: availableTimes[0],
      guests: 1,
      occasion: 'Birthday',
      instruction: 'No additional Instruction'
    });
  });

  test('submits the form when all input fields are valid', () => {
    // Arrange
    const submitDataMock = jest.fn();
    const dispatchOnDateChangeMock = jest.fn();
    const availableTimes = ['10:00 AM', '11:00 AM']; // Provide some available times

    const { getByTestId, getByLabelText, getByText } =
      render(
        <ReservationForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChangeMock}
          submitData={submitDataMock}
        />
      );

    // Act
    fireEvent.change(getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Choose date'), { target: { value: '2023-09-15' } });
    fireEvent.change(getByLabelText('Choose time'), { target: { value: '10:00 AM' } });
    fireEvent.change(getByLabelText('Number of guests'), { target: { value: '8' } });
    fireEvent.change(getByLabelText('Occasion'), { target: { value: 'Anniversary' } });
    fireEvent.change(getByLabelText('Additional Instructions'), { target: { value: 'No special instructions' } });

    // Assert that the button is enabled and simulate form submission
    const submitButton = screen.getByText('Make your Reservation');
    expect(submitButton).toBeEnabled();
    fireEvent.click(submitButton);

    // Assert that submitData is called
    expect(submitDataMock).toHaveBeenCalledTimes(1);

  });

});
