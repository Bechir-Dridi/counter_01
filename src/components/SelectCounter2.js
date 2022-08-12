import React from 'react'
import './SelectCounter2.css'

export default function SelectCounter2({ pnumOption2, pnumberTaker2, poptions }) {
    return (
        <div className='SelectCounter2'>
            <select value={pnumOption2} onChange={pnumberTaker2} name='numbers'>
                {poptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>))}
            </select>
        </div>
    )
}