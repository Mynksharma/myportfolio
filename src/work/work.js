import React from 'react';
import img1 from '../assets/images/fb.png';
import img2 from '../assets/images/homepage-compressed.jpg';
import img3 from '../assets/images/lyfscr.png';
import img4 from '../assets/images/home.png';
import img5 from '../assets/images/image3.png';
import img6 from '../assets/images/gokartscr1.png';
import './work.css';
function Work(){
return(
    <div className="work">
        <h1>My works</h1>
        <div className="projects">
             <div><img src={img1} /><p>Social networking site</p><a href="https://github.com/Mynksharma/friends" target="_blank"><button type='button'>View Project</button></a></div>
            <div><img src={img2} /><p>Food ordering site</p><a href="https://github.com/Mynksharma/FoodShala" target="_blank"><button type='button'>View Project</button></a></div> 
            <div><img src={img3} /><p>E-commerce site</p><a href="https://github.com/Mynksharma/LifeStyle_store" target="_blank"><button type='button'>View Project</button></a></div>
            <div><img src={img4} /><p>Online job portal</p><a href="https://github.com/Mynksharma/JobSearch" target="_blank"><button type='button'>View Project</button></a></div>
            <div><img src={img5} /><p>Smart search functionality</p><a href="https://github.com/Mynksharma/Smart_search_functionality" target="_blank"><button type='button'>View Project</button></a></div>
            <div><img src={img6} /><p>E-commerce site</p><a href="https://github.com/Mynksharma/Gokart" target="_blank"><button type='button'>View Project</button></a></div>
        </div>
    </div>
);
}
export default Work;