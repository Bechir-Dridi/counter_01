import React from 'react';
import './SubButton.css';

export default function SubButton({ bSubtract, pnumOption }) {
    return (
        <div className='SubButton'>
            <button onClick={bSubtract}><h1>-{pnumOption}</h1></button>
        </div>
    )
}
