import React  from 'react';
import './button.css';
import {Route,NavLink,Switch} from 'react-router-dom';
function Button(props) {
  return (
       <div className="buttons">
           {props.content}
       </div> 
  );
}

export default Button;
