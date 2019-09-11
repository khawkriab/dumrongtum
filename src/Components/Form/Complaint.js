import React, { Component } from 'react'
import { LabelL, LabelR, SummaryText } from '../../Asset/styled'


export function FormCompUpload({ children }) {
    return (
        <div className='-comp-upload styleScroll' >
            {children}
        </div>
    )
}
export function FormCompUpList({ children }) {
    return (
        <div className='-upList'>
            {children}
        </div>
    )
}
export function FormCompAgree({ children, style }) {
    return (
        <div className='-comp-agree' style={style} >
            {children}
        </div>
    )
}

// export function Sumtext({ title, children }) {
//     return (
//         <SummaryText>
//             <LabelL>{title}</LabelL>
//             {children}
//         </SummaryText>
//     )
// }