import React, { useState } from 'react';
import "./card.css"

export default function Card({info}) {
    return (
        <div className="card">
            <div className="cover-photo">
                <img src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" className="profile" />
            </div>
            <div className="profile-name">Pravind Pushkar</div>
            <p className="about">Manages the overall<br />activity of IC</p>
            <button className="follow-btn">President</button>
            <div>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    )
}