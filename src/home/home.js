import React,{useState,useEffect,useRef} from 'react';
import Work from '../work/work';
import Header from '../header/header';
import HomeContent from '../home_content/homecontent';
import bottomimg from '../assets/images/Path 1.png';
import contact from '../contact/contact';
import About from '../about/about';
import './home.css';
import {Route,NavLink,Switch} from 'react-router-dom';
function Home() {
  let path=window.location.pathname.slice(1);
  const [change,setChange]=useState(path);
  const [hdr,setHdr]=useState('');
  const btn=useRef();
  useEffect(() => {
    hdrstatus(change);
    document.addEventListener("keydown",function(e){
      e = e || window.event;
      if (e.keyCode == '40') {
        btn.current.click();
        }
    })
  }, []);
  const hdrstatus=(value)=>{
     switch(value){
       case '':setHdr('about');break;
       case 'about':setHdr('work');break;
       case 'work':setHdr('contact');break;
       case 'contact':setHdr('');break;
     }
     setChange(value);
  }
  const bottomcontent= <NavLink  to={`/${hdr}`} exact style={{textDecoration: 'none',color:'white'}} ref={btn} onClick={()=>hdrstatus(hdr)}>
  <img src={bottomimg} style={{width:'40px',height:'40px'}} /></NavLink>
  return (
       <div className="home">
           <Header headerstatus={hdrstatus} />
          <Switch>
          <Route path="/" exact render={()=><HomeContent contactlink={hdrstatus}/>} />
             <Route path="/about" exact component={About} />
            <Route path="/work" exact component={Work} />
            <Route path='/contact' exact component={contact} />
            </Switch>
            <div className="bottombutton">
              {bottomcontent}
           </div>
       </div> 
  );
}

export default Home;
