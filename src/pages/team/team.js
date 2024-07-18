import { React, useState } from 'react';
import Card from '../card/card';
import "./team.css"

export default function Team() {
    return (
        <div className="team">
            <h1>IC | TEAM 24'</h1>

            <div className="main">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}