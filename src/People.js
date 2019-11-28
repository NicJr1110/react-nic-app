import React from 'react';

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

let People = () => (
    <ul>
    {names.map((value, index) => (
        <li key= {index}>{value}</li>
    ))}
    </ul>
);

export default People;
