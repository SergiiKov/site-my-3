import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NameBlock from '../component/name-block';
import ContactBlock from '../component/contact-block';

const AboutPage = () => {

  return (
    <React.Fragment>
  
  <div className='main2'>
            <div className="gallery">
            <NameBlock />
           
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
            <ContactBlock />

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default AboutPage;