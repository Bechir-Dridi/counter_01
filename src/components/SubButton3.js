import React from 'react';
import "./SubButton3.css";

export default function SubButton3({ bSubtract3, pnumOption3 }) {
    return (
        <div className='SubButton3'>
            <button onClick={bSubtract3}><h1>-{pnumOption3}</h1></button>
        </div>
    )
}
