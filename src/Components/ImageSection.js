import React from 'react'
import styled from 'styled-components';
import photo from '../img/photo.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {

    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={photo} alt=""/>
            </div>
            <div className="right-content">
                {/* <h4>I am <span>Jesse Zhang</span></h4> */}
                <p className="paragraph">

                    
                </p>
                <div className="about-info">
          
                    <div className="info">
                        <p>•	4 years of relevant experience in web-based application development</p>
                        <p>•	Proficiency with full-stack JavaScript/ Typescript development (VueJS, ReactJS/ Redux, NodeJS/Express.js)</p>
                        <p>•	Experience with front-end technologies: HTML, CSS/SASS, AJAX, JSON, Webpack </p>
                        <p>•	Solid understanding of UI/UX design, Object-oriented and functional programming </p>
                        <p>•	Experience in creating back-end service with Nodejs and Python, such as APIs (RESTful, GraphQL), middleware, authentication, log, and scheduled task</p>
                        <p>•	Knowledge of unit testing and automation testing tool: Mocha, Jest, Chai.</p>
                        <p>•	Good understanding of SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases management</p>
                        <p>•	Experience with version control (Git), continuous integration (Jenkins) and containerization (Docker)</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
          
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;            
        }
        
    }
    .left-content{
        width: 50%;
        padding: 30px;
        img{
            width: 400px;
  height: 400px;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
