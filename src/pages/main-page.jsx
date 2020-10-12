import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NameBlock from '../component/name-block';
import ContactBlock from '../component/contact-block';

const Main = () => {

  return (
    <React.Fragment>
  
  <div className='main2'>
            <div className="gallery">
                <div className="gallery__item gallery__item--1">
                <Link to='/'>
                    <NameBlock />
                </Link>
                </div> 
           
            <div className="gallery__item gallery__item--2">
                <Link to='/about'>
                    <div className="menu-item">
                        <h2>Привіт!</h2>
                    </div>
                </Link>
            </div>
  <ContactBlock />

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default Main;