import React from 'react';
import { useOrderContext } from '../../../provider/OrderContext'; // Import the hook
import bruschettaImage from '../../../assets/bruschetta.jpeg';
import greekSaladImage from '../../../assets/greek-salad.jpg';
import lemonDessertImage from '../../../assets/lemon-dessert.jpg';
import gnocchiImage from '../../../assets/gnocchi.jpg';
import potatoSaladImage from '../../../assets/potato.jpg';
import turkeyImage from '../../../assets/turkey.jpg';
import MenuCard from './MenuCard';
import './Menu.css';

const menuItems = [
    {
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
    {
        name: 'Potato Salad',
        image: potatoSaladImage,
        price: '$5.99',
        description: `Swap a mayonnaise base for cherry tomatoes, olives, roasted 
        red peppers and fresh Italian herbs in this low-fat salad.`,
    },
    {
        name: 'Speedy Mediterranean gnocchi',
        image: gnocchiImage,
        price: '$4.99',
        description: `A super fast, low fat and low calorie meal using chargrilled veg 
        from the deli counter, red pesto, basil and cheese.`,
    },
    {
        name: 'Turkey-stuffed peppers',
        image: turkeyImage,
        price: '$17.99',
        description: `This low-calorie dinner from Joe Wicks is 3 of your 5-a-day, 
        rich in vit C and folate too. Filling the peppers with low-fat turkey breast mince keeps it lean.`,
    },
];

const Menu = () => {
    const { addMealToOrder } = useOrderContext(); // Access the order state and functions

    return (
        <>
            <section className="container grid menus">
                <div className="menus-header">
                    <h2> Pick & Feast 🍋  </h2>
                </div>
                {menuItems.map((menuItem, index) => (
                    <MenuCard key={index} menuItem={menuItem} addMealToOrder={addMealToOrder} />
                ))}
            </section>
        </>
    );
};

export default Menu;