import React from 'react';

let pages = [1,2,3,4];

let Pagination = () => (
    
    <ul className="pagination">
    {pages.map((value, index) => (
        <li key= {index}>
            <a href={ "/page/" + value }>{value}</a>
        </li>
    ))}
    </ul>
);

export default Pagination;
