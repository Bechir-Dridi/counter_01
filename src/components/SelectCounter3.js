import React from 'react';
import "./SelectCounter3.css"

export default function SelectCounter3({ pnumOption3, pnumberTaker3, poptions }) {
    return (
        <div className='SelectCounter3'>
            <select value={pnumOption3} onChange={pnumberTaker3} name='numbers'>
                {poptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>))}
            </select>
        </div>
    )
}