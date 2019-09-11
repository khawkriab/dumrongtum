import React, { Component } from 'react';
import Images from '../../Components/Images';

export function Search({ title, onChange, placeholder, classNameInp, classNameDiv, raduis, w, hint }) {
    return (
        <div className={`${classNameDiv}`}>
            <div className="text-align-left admin-search-title"> {title} </div>

            <div className="admin-search-input">
                <button>
                    <img src={Images.Asset21} alt='' />
                </button>
                <input type='text' placeholder={placeholder} className={`admin-searchInput ${classNameInp}`} onChange={onChange} style={{ borderRadius: raduis, width: w }} />
                {hint && <button className="far fa-question-circle hint">
                    <div> {hint}</div>
                </button>}
            </div>
        </div>
    )
}