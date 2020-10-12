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
  
  <div className='main2'>
            <div className="gallery">
         
             
                    <NameBlock />
       
         
           
            <div className="gallery__item gallery__item--2">
                <Link to='/about'>
                    <div className="menu-item">
                        <h2>Привіт!</h2>
                    </div>
                </Link>
            </div>
<HomeButton />
  <ContactBlock />

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default Main;