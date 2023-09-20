import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrderContext } from '../../../provider/OrderContext'; // Import the hook
import './Menu.css';
import ConfirmationModal from './ConfirmationModal'; // Import the modal component

const MenuCard = ({ menuItem }) => {
  const { addMealToOrder } = useOrderContext(); // Access the addMealToOrder function
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToOrder = () => {
    // Pass the menuItem to the context function
    addMealToOrder(menuItem);

    // Open the confirmation modal
    setConfirmationOpen(true);
  };

  const handleConfirm = () => {
    // Close the confirmation modal
    setConfirmationOpen(false);

    // Implement navigation logic to the order page
    navigate('/order-online');
    
  };

  const handleCancel = () => {
    // Close the confirmation modal
    setConfirmationOpen(false);
  };

  return (
    <>
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={menuItem.image} alt={menuItem.name} />
      </div>
      <div className="menu-card-header">
        <h3>{menuItem.name}</h3>
        <span>{menuItem.price}</span>
      </div>
      <div className="menu-card-body-footer">
        <p>{menuItem.description}</p>
        <button className="button-primary" onClick={handleAddToOrder}>Add to Order</button>
      </div>
    </article>

    {/* Render the confirmation modal if open */}
    {isConfirmationOpen && (
      <ConfirmationModal
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    )}
    </>
  );
};

export default MenuCard;
