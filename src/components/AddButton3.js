import React from 'react';
import './AddButton3.css';

export default function AddButton({ bAdd3, pnumOption3 }) {
    return (
        <div className='AddButton3'>
            <button onClick={bAdd3}><h1>+{pnumOption3}</h1></button>
        </div>
    )
}
