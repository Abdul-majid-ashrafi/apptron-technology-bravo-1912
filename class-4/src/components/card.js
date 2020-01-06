import React from 'react';
import './card.css'

export function Card({ children, colorClass }) {
    return (
        <div className={`${colorClass} padding20 container`}>
            <div className={`${colorClass} padding10`}>
                {children}
            </div>
        </div>
    )
}
