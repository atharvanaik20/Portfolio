import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import React from 'react'
import IntroImg from "../assets/intro-img.jpg";

export const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p> Hi, I am a Freelancer </p>
            <h1> Software Developer </h1>
            <div c>
                <Link to="/Project" className="btn"> Projects </Link>
                <Link to="/Contact" className="btn btn-light"> Contact </Link>
            </div>
        </div>
    </div>
  )
};
//export default HeroImg;