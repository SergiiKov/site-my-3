import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Resume = () => {

  return (
    <React.Fragment>
  
  <div className='main2'>
            <div className="gallery">
                <div className="gallery__item gallery__item--1">
                    <div className="name">
                        <div className="letter1">K</div>
                        <div className="letter2">o</div>
                        <div className="letter2">v</div>
                        <div className="letter2">t</div>
                        <div className="letter2">u</div>
                        <div className="letter2">n</div>
                    </div>
                </div> 
           
            <div className="gallery__item gallery__item--2">
              
            <Link to='/'>
                    <div className="menu-item">
                        <h2>Resume</h2>
                    </div>
                </Link>
         
            </div>
            <div className="gallery__item gallery__item--3">
        
                    <div className="menu-item">
                        <h2>Tesdsds</h2>
                    </div>
              
            </div>

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default Resume;