import React from 'react';
import './about.css';
import img from '../assets/images/wave2.png';
import img2 from '../assets/images/port.jpg';
function About(){
    return(
        <div className="about">
            <div className="left">
                 <div className="leftcontent">
                     <h1>ABOUT ME</h1>
                     <img src={img} className="wave" />
                     <div className="leftcontentinner">
                         <img src={img2}  style={{width:'100%',height:'100%'}}/>
                     </div>
                 </div>
            </div>
            <div className="right">
                <h1><span style={{backgroundColor:'rgb(75,74,74)',padding:'10px 0px 10px 20px'}}>Mayank Sh</span>arma</h1>
                <p>
                Dedicated web developer with experience in creating responsive websites using HTML5, CSS3, JavaScript, Bootstrap, Node.js, Express, React, AJAX and PHP. Strong collaboration skills and proven history of application development.
                </p>
            </div>
        </div>
    );
}
export default About;