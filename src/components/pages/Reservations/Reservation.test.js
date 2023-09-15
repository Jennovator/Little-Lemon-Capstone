import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import Reservation from './Reservation';

describe('Reservation page', () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test('renders Reservation component', () => {
        // Mock the useNavigate function
        const mockNavigate = jest.fn();

        // Mock the fetchAPI and submitAPI functions
        jest.mock('../../utils/fakeAPI', () => ({
            fetchAPI: jest.fn(() => []),
            submitAPI: jest.fn(() => true),
        }));

        // Mock the useNavigate hook
        jest.mock('react-router-dom', () => ({
            useNavigate: () => mockNavigate,
        }));

        render(
            // Wrap Reservation component in Router
            <MemoryRouter>
                <Reservation />
            </MemoryRouter>
        );

        // Test if "Table reservation" text is present
        expect(screen.getByText('Table reservation')).toBeInTheDocument();

        // Test if the form is rendered
        expect(screen.getByTestId('reservation-form')).toBeInTheDocument();

    });

    test('should have one or more available booking time options', async () => {
        render(
            <MemoryRouter>
                <Reservation />
            </MemoryRouter>
        );

        const timeOptions = await screen.findAllByTestId('booking-time-options');

        expect(timeOptions.length).toBeGreaterThanOrEqual(1);
        timeOptions.forEach(timeOption =>
            expect(timeOption.value).toMatch(timeFormat)
        );
    });

    test('should update available booking time options when changing booking date', async () => {
        render(
            <MemoryRouter>
                <Reservation />
            </MemoryRouter>
        );

        const bookingDate = "2023-09-18"; // Ensure bookingDate is defined as a string
        const dateInput = screen.getByLabelText(/Choose date/);
        const initialTimeOptions = await screen.findAllByTestId('booking-time-options');
        fireEvent.change(dateInput, { target: { value: bookingDate } });
        fireEvent.blur(dateInput);
        const updatedTimeOptions = await screen.findAllByTestId('booking-time-options');

        console.log(dateInput)

        expect(dateInput).toHaveValue(bookingDate);
        initialTimeOptions.forEach(timeOption =>
            expect(timeOption.value).toMatch(timeFormat)
        );
        updatedTimeOptions.forEach(timeOption =>
            expect(timeOption.value).toMatch(timeFormat)
        );
        expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
    });

    //test('', () => {});
});
