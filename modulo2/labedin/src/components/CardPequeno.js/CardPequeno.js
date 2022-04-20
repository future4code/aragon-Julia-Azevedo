import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-pequeno-container">
            <p>{ props.texto }</p>
        </div>

    )
}

export default CardPequeno;