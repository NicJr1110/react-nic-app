import React from 'react';
import BasketItem from './BasketItem';


let Basket = ({ items }) => (
   <table>
        <thead>
           <th>Name</th>
           <th>Price</th>
        </thead>
        <tbody>
        {items.map((item, i) => (
            <BasketItem key = { i} name = { item.name } price = { item.price } />
        ))}
       </tbody>
   </table>
);

export default Basket;