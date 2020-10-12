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


const Main = () => {

  return (
    <React.Fragment>
  <div>
    <div className="main-grid">
      <div className="main-grid__item main-grid__item--1">
        <NameBlock />
      </div>

      <div className="main-grid__item main-grid__item--2">
        <Link to='/about'>
          <div className="">
            <h2>Привіт!</h2>
          </div>
        </Link>
      </div>
      <div className="main-grid__item main-grid__item--8">
        <HomeButton />
      </div>
      <div className="main-grid__item main-grid__item--6">
        <ContactBlock />
      </div>
    </div>   
  </div>
    </React.Fragment>
 )    
};

export default Main;