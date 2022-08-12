import React from 'react'
import "./ClearButton.css"

export default function ClearButton({ pClearFct }) {
    return (
        <div className='ClearFct'>
            <button onClick={pClearFct}><h1>CL</h1></button>
        </div>
    )
}
