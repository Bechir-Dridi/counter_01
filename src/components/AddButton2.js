import React from 'react'
import './AddButton2.css'

export default function AddButton({ bAdd2, pnumOption2 }) {
    return (
        <div className='AddButton2'>
            <button onClick={bAdd2}><h1>+{pnumOption2}</h1></button>
        </div>
    )
}
