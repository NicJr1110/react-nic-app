import React from "react";


const Figure = ({ caption, src}) => (
    <figure className="card">
        <img
            className="card-img-top"
            alt={ caption }
            src={ src }
        />
        <div className="card-body">
            <figcaption className="card-text">
                { caption }
            </figcaption>
        </div>
    </figure>
);

//Defualting props
Figure.defaultProps = {
    src : "https://placebear.com/300/300"
};

export default Figure;