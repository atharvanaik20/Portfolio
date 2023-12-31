import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import React from 'react'
import ReacJs1 from "../assets/ReactJS.jpg";
import SpringBoot from "../assets/spring-boot.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who Am I ?</h1>
            
            <p>"I am an exceptional Full Stack Web Developer, crafting captivating,<br />
                 cutting-edge websites that seamlessly adapt to any screen size<br />
                  while ensuring utmost security for my valued clients." </p>
            <Link to="/contact">
                <button className="btn">Contact</button> 
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ReacJs1} className="img" alt="true" /> 
                </div>
                <div className="img-stack bottom">
                    <img src={SpringBoot} className="img" alt="true" /> 
                </div>
            </div>
        </div>     
    </div>
  )
}

export default AboutContent;