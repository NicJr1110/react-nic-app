import React from 'react';
import BasketItem from './BasketItem';


const Basket = ({ items }) => (
   <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Price</th>
            </tr>
         </thead>
         <tbody>
            {items.map((item, i) => (
               <BasketItem key = { i } name = { item.name } price = { item.price } />
            ))}
         </tbody>
   </table>
);

export default Basket;