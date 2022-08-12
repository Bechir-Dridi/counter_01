import React from 'react'
import './AddButton.css'

export default function AddButton({ bAdd, pnumOption }) {
    return (
        <div className='AddButton'>
            <button onClick={bAdd}><h1>+{pnumOption}</h1></button>
        </div>
    )
}
