import React from 'react';

let BasketItem = ({ name, price}) => (
   
    <tr>
        <td>{ name }</td>
        <td>{ price }</td>
    </tr>
)

export default BasketItem;