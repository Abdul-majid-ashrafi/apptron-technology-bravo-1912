import React from 'react';
import './card.css'

export function Card({ children, colorClass }) {
    if (!window.navigator.onLine) {
        throw new Error("No Internet connection.").name = "internet";
    }
    if (colorClass === "bluedCard") {
        throw new Error("This class not found").name = "class";
    }
    return (
        <div className={`${colorClass} container`}>
            <div className="nestedCard">
                {children}
            </div>
        </div>
    )
}
