import React, { Component } from 'react'

export function Img({ w, h, px, py, border, src, raduis, bgc, boxshow, alt}) {
    return (
        <div
            style={{
                width: w,
                height: h,
                border: border,
                padding: py && !px ? py + '0px' : px && !py ? '0px' + px : !px && !py ? '5px' : py, px,
                borderRadius: raduis,
                overflow: 'hidden',
                backgroundColor: bgc ? bgc : '#fff',
                boxShadow: boxshow ? boxshow : ''
            }}>
            <img src={src} style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center' }} alt={alt}/>
        </div>
    )
}
