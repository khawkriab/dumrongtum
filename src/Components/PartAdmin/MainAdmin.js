import React, { Component } from 'react'


export function PanelRight({ children }) {
    return (
        <div className='admin-PanelRight' >
            {children}
        </div>
    )
}
export function PanelContent({ children }) {
    return (
        <div className='admin-PanelContent'>
            {children}
        </div>
    )
}
export function PanelHead({ children }) {
    return (
        <div className='admin-PanelHead'>
            {children}
        </div>
    )
}
export function PanelWhi({ children }) {
    return (
        <div className='admin-PanelWhi'>
            {children}
        </div>
    )
}
export function PanelWhiMar({ children, cn }) {
    return (
        <div className={`admin-PanelWhi marg ${cn}`} >
            {children}
        </div>
    )
}


export function PanelWhiMargL({ children }) {
    return (
        <div className='admin-PanelWhi margL'>
            {children}
        </div>
    )
}
