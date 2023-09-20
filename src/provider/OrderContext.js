import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addMealToOrder = (menuItem) => {
    const updatedOrderItems = [...orderItems];
    const existingItemIndex = updatedOrderItems.findIndex((item) => item.name === menuItem.name);

    if (existingItemIndex !== -1) {
      updatedOrderItems[existingItemIndex].quantity += 1;
    } else {
      menuItem.quantity = 1;
      updatedOrderItems.push(menuItem);
    }

    setOrderItems(updatedOrderItems);
  };

  const handleQuantityChange = (index, change) => {
    const updatedOrderItems = [...orderItems];
    updatedOrderItems[index].quantity += change;

    if (updatedOrderItems[index].quantity <= 0) {
      updatedOrderItems.splice(index, 1);
    }

    setOrderItems(updatedOrderItems);
  };

  return (
    <OrderContext.Provider value={{ orderItems, addMealToOrder, handleQuantityChange }}>
      {children}
    </OrderContext.Provider>
  );
};
