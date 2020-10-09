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
                <Link to='/about'>
                    <div className="menu-item">
                        <h2>About</h2>
                    </div>
                </Link>
            </div>
            <div className="gallery__item gallery__item--3">
                <Link to='/resume'>
                    <div className="menu-item">
                        <h2>Resume</h2>
                    </div>
                </Link>
            </div>

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default Resume;