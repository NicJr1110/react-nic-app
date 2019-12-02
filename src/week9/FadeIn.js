import React from 'react';

const FadeIn = ({ time , children}) => {
    <h1 style={ {
        transition: all +time+ linear
    } }
    > { children } </h1>

    //keyframes
    //opacity = 0 at 0%
    //opacity = 1 at 100|%



};

export default FadeIn;