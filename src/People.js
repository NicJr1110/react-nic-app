import React from 'react';

//let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = ({ names }) => (
    <ul>
    {names ?
      names.map((value, index) => (
        <li key= {index}>{value}</li>
    )) : <li>Nothing to see here.</li> }
    </ul>
);

export default People;
