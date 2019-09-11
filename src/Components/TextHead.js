import React from 'react'

const TextHead = ({ title }) => (
    <h2 className='Text-Head' >{title}</h2>
)
export default TextHead


export function TextLine({ title, request }) {
    return (
        <div className='-text-line'>
            <p style={{ color: request ? '#29a4db' : '' }}>{title}</p>
        </div>
    )
}