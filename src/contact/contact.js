import React from 'react';
import './contact.css';
function Contact(){
    return (
        <div className="contact">
            <h1><span style={{backgroundColor:'rgb(75,74,74)',padding:'10px 0px 10px 20px'}}>Let's Ge</span>t In Touch</h1>
            <div className="contactmiddle">
                <div className="contactforms">
                    <div className="inputs">
                        <input type="text" placeholder="First Name"/></div> 
                    <div className="inputs">
                        <input type="text" placeholder="Last Name"/></div>
                </div>
                <div className="contactforms">
                <div className="inputs">
                <input type="text" placeholder="Email"/>
                    </div> 
                    <div className="inputs">
                    <input type="text" placeholder="Phone"/>
                    </div>
                </div>
            </div>
            <div className="message">
               <textarea placeholder="Message" className="msgbox" />
            </div>
            <div className="button">
                Contact Now
            </div>
        </div>
    )
}
export default Contact;