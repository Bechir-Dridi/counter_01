import React from 'react'
import "./SubButton2.css"

export default function SubButton2({ bSubtract2, pnumOption2 }) {
    return (
        <div className='SubButton2'>
            <button onClick={bSubtract2}><h1>-{pnumOption2}</h1></button>
        </div>
    )
}
