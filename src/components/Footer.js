import "./FooterStyle.css";
import React from 'react';
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>107, Siddhi arcked 'B' apartments</p>
                        <p>Namaskar Square, Nanded</p>
                        <p>Maharashtra, India 431605</p>
                    </div>
                </div>
                <div className="phone">
               <h4> <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
               8329360468 </h4>
                </div>
                <div className="email">
               <h4> <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/> 
               atharvanaik20@gmail.com </h4>
                </div>
            </div>

            <div className="right">
                <h4> About Me </h4>
                <p>As a recent full stack graduate, I have knowledge of Core Java,<br /> HTML, CSS, 
                    JavaScript, Node.js, ReactJS, MySQL and SpringBoot.<br />
                     I'm a quick learner, dedicated to delivering high-quality work<br />
                     and excited to join a dynamic team.</p>
                <div className="social">
                
                        <a href="https://twitter.com/atharva_naik20">
                        <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                        </a>
                        <a href="https://www.linkedin.com/in/atharvanaik20">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                        </a>
                        <a href="https://www.instagram.com/atharva_naik20/">
                        <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                        </a>
                        <a href="https://www.youtube.com/@atharvanaik20">
                        <FaYoutube size={30} style={{color:"#fff", marginRight:"1rem"}}/> 
                        </a>
                    </div>
                </div>
            </div>
        </div>      
    )
}

//export default Footer

