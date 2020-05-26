import React,{useState}  from 'react';
 import './homecontent.css';
 import Button from '../buttons/button';
 import img from '../assets/images/portfolio.jpg';
 import {NavLink} from 'react-router-dom';
 function HomeContent(props) {
  return (
       <div className="homecontent">
         <div className="homeimg">
           <div className="homedivimg"><img src={img} style={{height:'100%',width:'100%'}}/></div>
         </div>
         <div className="homeintro">
            <p className="name" style={{color:'#FFBCBC'}}>Mayank Sharma</p>
            <p>Web Developer</p>
            <div className="Buttoncontainer">
                <a href="/resume.pdf" download="Mayank_Sharma_Resume.pdf" style={{textDecoration: 'none'}}><Button content="Download CV"/></a>
               <NavLink to={'/contact'} exact style={{textDecoration: 'none'}} onClick={()=>props.contactlink('contact')}> <Button content="Contact"/></NavLink>
            </div>
         </div>
       </div> 
  );
}

export default HomeContent;