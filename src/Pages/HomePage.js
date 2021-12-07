import React, { useEffect, useRef } from 'react'
import { init } from "ityped";
import styled from 'styled-components';

import Particle from '../Components/Particle';

function HomePage() {
    const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full Stack Developer", "Front-end Developer", "Nodejs/Python Developer "],
    });
  }, []);

    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                
                
                
                <h2>Hi There, I'm</h2>
                <h1>Jesse Zhang</h1>
                <h3>
                    <span ref={textRef}></span>
                </h3>
                
                <a href="#portfolio">
                <img src="assets/down.png" alt="" />
                </a>
            
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
`;

export default HomePage;
