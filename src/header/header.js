import React,{useRef,useEffect,useState}  from 'react';
import {NavLink} from 'react-router-dom';
import menu from '../assets/images/menu.png';
import './header.css';
function Header(props) {
  const btnref=[useRef(),useRef(),useRef()];
useEffect(() => {
  for(let i of btnref){
    if(i.current.classList.contains('my-active')){
      i.current.style.color="#FFBCBC";
    }
    else{
      i.current.style.color="white";
    }
  }
});
  return (
       <div className="header">
         <div className="headernamelink">
         <NavLink to="/" exact style={{textDecoration: 'none'}} onClick={()=>props.headerstatus('')}>
         <div className="headerName">
               mayank
           </div>
         </NavLink></div>
           <div class="headerlinks">
             <img className="smallsizebutton" src={menu} style={{width:'40px',height:'30px'}}/>
               <ul class="headerul">
           <li className="headerlist">
           <NavLink to="/about" exact className="links" activeClassName="my-active"  ref={btnref[0]} onClick={()=>props.headerstatus('about')}>About</NavLink>  
           </li>
           <li className="headerlist">
           <NavLink to="/work" exact  className="links" activeClassName="my-active"  ref={btnref[1]} onClick={()=>props.headerstatus('work')}>Work</NavLink>  
           </li> <li className="headerlist">
           <NavLink to="/contact" exact  className="links" activeClassName="my-active" ref={btnref[2]} onClick={()=>props.headerstatus('contact')}>Contact</NavLink>
           </li></ul>
           </div>
       </div> 
  );
}

export default Header;
