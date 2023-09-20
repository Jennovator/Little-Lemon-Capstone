import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { OrderProvider } from '../../../../provider/OrderContext'; // Replace with your actual context provider
import Menu from '../Menu';
import MenuCard from '../MenuCard';
import OrderOnline from '../OrderOnline';
import ConfirmationModal from '../ConfirmationModal';

describe('Menu Section Components', () => {

    // Menu Component Test
    test('Menu component renders correctly', () => {
        const { getByText } = render(
            <MemoryRouter>
                <OrderProvider>
                <Menu />
            </OrderProvider>
            </MemoryRouter>
        );

        // Check if the heading is displayed
        expect(getByText('Pick & Feast 🍋')).toBeInTheDocument();

        // Check if menu items are displayed (you can add more assertions as needed)
        expect(getByText('Greek Salad')).toBeInTheDocument();
        expect(getByText('$12.99')).toBeInTheDocument();
        expect(getByText('Lemon Dessert')).toBeInTheDocument();
        expect(getByText('$5.00')).toBeInTheDocument();
        
    });

    // MenuCard Component Test
    test('MenuCard component renders correctly and handles interactions', () => {
        // Define a mock menu item for testing
        const menuItem = {
            name: 'Test Item',
            price: '$9.99',
            description: 'Test Description',
        };

        // Mock the context value with a mock function
        const mockAddMealToOrder = jest.fn();

        // Render the MenuCard within the OrderContext
        const { getByText, getByTestId } = render(
            <MemoryRouter>
                <OrderProvider value={{ addMealToOrder: mockAddMealToOrder }}>
                    <MenuCard menuItem={menuItem} />
                </OrderProvider>
            </MemoryRouter>
        );

        // Check if "Add to Order" button is present
        const addToOrderButton = getByText('Add to Order');
        expect(addToOrderButton).toBeInTheDocument();

        // Simulate clicking "Add to Order" button
        fireEvent.click(addToOrderButton);

        // Check if confirmation modal is displayed
        const confirmationModal = getByTestId('confirmation-modal');
        expect(confirmationModal).toBeInTheDocument();

        // Check if "Yes" and "No" buttons are present in the modal
        expect(getByText('Yes')).toBeInTheDocument();
        expect(getByText('No')).toBeInTheDocument();
    });

    // OrderOnline Component Test
    test('OrderOnline component renders correctly', () => {
        const { getByText } = render(
            <OrderProvider>
                <OrderOnline />
            </OrderProvider>
        );

        // Check if the heading is displayed
        expect(getByText('Your Order 🍋')).toBeInTheDocument();

        // Check if the message for an empty order is displayed
        expect(getByText('Your order is empty.')).toBeInTheDocument();
    });

    // ConfirmationModal Component Test
    test('ConfirmationModal component renders correctly and handles interactions', () => {
        const onConfirm = jest.fn();
        const onCancel = jest.fn();

        const { getByText } = render(
            <OrderProvider>
                <ConfirmationModal onConfirm={onConfirm} onCancel={onCancel} />
            </OrderProvider>
        );

        // Check if the modal message is displayed
        expect(getByText('Item added to order. Do you want to view your order?')).toBeInTheDocument();

        // Simulate clicking "Yes" and "No" buttons
        fireEvent.click(getByText('Yes'));
        fireEvent.click(getByText('No'));

        // Check if the onConfirm and onCancel functions are called
        expect(onConfirm).toHaveBeenCalledTimes(1);
        expect(onCancel).toHaveBeenCalledTimes(1);
    });

});
