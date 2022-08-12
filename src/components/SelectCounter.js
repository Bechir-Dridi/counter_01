import React from 'react'
import "./SelectCounter.css"

export default function SelectCounter({ pnumOption, pnumberTaker, poptions }) {
    return (
        <div className='SelectCounter'>
            <select value={pnumOption} onChange={pnumberTaker} name='numbers'>
                {poptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>))}
            </select>
        </div>
    )
}