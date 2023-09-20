import React from 'react';
import { useOrderContext } from '../../../provider/OrderContext'; // Import the hook
import './Menu.css';

const OrderOnline = () => {
    const { orderItems, handleQuantityChange } = useOrderContext(); // Access the order state and handleQuantityChange function

    // Check if orderItems is defined and not empty
    if (!orderItems || orderItems.length === 0) {
        return (
            <section className="container order">
                <h2> Your Order 🍋  </h2>
                <p>Your order is empty.</p>
            </section>
        );
    }

    // Calculate the total cost of the order
    const totalCost = orderItems.reduce((total, item) => {
        return total + parseFloat(item.price.replace('$', '')) * item.quantity; // Update total based on quantity
    }, 0).toFixed(2); // Ensure the total has two decimal places

    return (
        <section className="container order">
            <h2> Your Order 🍋  </h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="button-minus" onClick={() => handleQuantityChange(index, -1)}>-</button>
                                <span className="quantity">{item.quantity}</span>
                                <button className="button-plus" onClick={() => handleQuantityChange(index, 1)}>+</button>
                            </td>
                            <td>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="total">Total: ${totalCost}</p>
        </section>
    );
};

export default OrderOnline;
