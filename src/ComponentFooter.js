import React from 'react';
import { Link } from 'react-router-dom';

const ComponentFooter = () => (
    <ul className = "list-group">
        <li className ="list-group-item" >
            <Link to="/components/progress">Progress</Link>
        </li>
        <li className ="list-group-item" >
            <Link to="/components/catchmeifyoucan">CatchMeIfYouCan</Link>
        </li>
    </ul>
);

export default ComponentFooter;