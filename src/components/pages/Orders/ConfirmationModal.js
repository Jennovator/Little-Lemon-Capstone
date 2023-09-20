import React from 'react';
import './Menu.css';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-backdrop">
      <div className="container confirmation-modal" data-testid="confirmation-modal">
        <p>Item added to order. Do you want to view your order?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
