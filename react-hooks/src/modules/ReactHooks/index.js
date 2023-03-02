import React, { useState, useEffect } from 'react';


import useProfile from './json/userProfile.json'
import styled from './style.css'


function ReactHooks() {
    // const [count, increments, decrements] = useCounter(0,1);
    const { name, work, resume, education, experience } = useProfile;

    useEffect(() => {
        document.title = "Aisah Port"
    },);

    return (
        <body>
            <header>
            <div class="container-logo">
              <div class="header-left">
                <div class="header-name">REACT HOOKS</div>
              </div>
              <div class="header-right">
                <a href="#about">About</a>
                <a href="#resume"><i></i> <span>Resume</span></a>
                <a href="#portfolio"><i></i><span>Portofolio</span></a>
                <a href="#contact"><span>Contact</span></a>
              </div>
            </div>
          </header>
        <br/> <br/> <br/>
        <div class="top-wrapper" id="about">
            <div class="containers">
                <h1>{name}</h1>
                <h2>{work}</h2>
                <p>{resume}</p>
                <br/>
            </div>
        </div>

        <div  id="resume" class="extra-satu">
          <div class="education">
            <h1>EDUCATION</h1>
            <p>{education}</p>
          </div>
          <br/><br/>
          <div class="experience">
            <h1>EXPERIENCE</h1>
            <p>{experience}</p>
          </div>
        </div>



        </body>
        
    )
}

export default ReactHooks;