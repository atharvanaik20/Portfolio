import "./WorkCardStyle.css";
import React from 'react';
// import pro1 from "../assets/homePage.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="pic" />  
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-detail">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn" > VIEW </NavLink>
                        <NavLink to={props.view} className="btn" > SOURCE </NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard;