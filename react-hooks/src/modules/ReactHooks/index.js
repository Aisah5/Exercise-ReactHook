import React, { useState, useEffect } from 'react';


import useProfile from './json/userProfile.json'
import styled from './style.css'


function ReactHooks() {
    // const [count, increments, decrements] = useCounter(0,1);
    const { name, work, resume } = useProfile;

    useEffect(() => {
        document.title = "Aisah Port"
    },);

    return (
        <div class="top-wrapper" id="about">
            <div class="containers">
                <h1>{name}</h1>
                <h2>{work}</h2>
                <p>{resume}</p>
                <br/>
            </div>
        </div>
    )
}

export default ReactHooks;