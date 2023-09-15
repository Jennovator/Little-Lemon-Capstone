import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './components/layout/Header';
import Reservation from './components/pages/Reservations/Reservation';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});

test('expands and collapses navigation when hamburger button is clicked', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  // Initially, the navigation links should not be expanded
  const navLinksElement = screen.getByRole('list');
  expect(navLinksElement).toHaveClass('nav-bar-links');

  // Click the hamburger button to expand the navigation
  const hamburgerButton = screen.getByRole('button', { type: 'button' });
  fireEvent.click(hamburgerButton);

  // Now, the navigation links should be expanded
  expect(navLinksElement).toHaveClass('nav-bar-links expanded');

  // Click the hamburger button again to collapse the navigation
  fireEvent.click(hamburgerButton);

  // The navigation links should be collapsed again
  expect(navLinksElement).toHaveClass('nav-bar-links');
});

test('renders App component with Header, Footer, and specific routes', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Ensure that the header element is present
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();

  // Ensure that the footer element is present
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();

  // Check if specific route components are rendered based on your routing logic
  // You can customize these checks based on the content or structure of the components
  const homeElement = screen.getByText('Reserve a table'); 
  expect(homeElement).toBeInTheDocument();

  // Using querySelector
  const aboutElement = document.querySelector('.our-story') 
  expect(aboutElement).toBeInTheDocument();

  // Using getElementsByClassName
  const abElements = document.getElementsByClassName('our-story');
  expect(abElements.length).toBeGreaterThan(0);
});

test('Reservation component renders', async () => {
  const { container } = render(<BrowserRouter> <Reservation /> </BrowserRouter>);
  
  // Use waitFor to wait for the element to appear in the DOM
  await waitFor(() => {
    const reservationElement = container.querySelector('.bookings');
    expect(reservationElement).toBeInTheDocument();
  });
});