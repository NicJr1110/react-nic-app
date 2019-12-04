import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <ul className = "list-group">
        <li className ="list-group-item" >
            <Link to="/buttons">Button</Link>
        </li>
        <li className ="list-group-item" >
            <Link to="/squares">Rainbox Box</Link>
        </li>
        <li className ="list-group-item" >
            <Link to="/tempconverter">TempConverter</Link>
        </li>
        <li className ="list-group-item" >
            <Link to="/rollcall">RollCall</Link>
        </li>
    </ul>
);

export default Footer;