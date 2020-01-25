import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export const Navigation = () => {
    return (
        <ul>
            <li><Link to="/about:majid ashraf">About</Link></li>
            <li><Link to="/contactinfo">Contact</Link></li>
            <li><Link to="/">Home</Link></li>
        </ul>
    )
}