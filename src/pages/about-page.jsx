import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NameBlock from '../component/name-block';
import ContactBlock from '../component/contact-block';
import HomeButton from '../component/home-button';

const AboutPage = () => {

  return (
    <React.Fragment>
  
  <div className="main-grid">
    <div className="main-grid__item main-grid__item--1">
        <NameBlock />
    </div>
    <div className="main-grid__item about-grid__item--1">
        123
      </div>  
    <div className="main-grid__item main-grid__item--8">
        <HomeButton />
      </div>           
    <div className="main-grid__item main-grid__item--6">
        <ContactBlock />
    </div>
  </div>   
      
    </React.Fragment>
 )    
};

export default AboutPage;