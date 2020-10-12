import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NameBlock from '../component/name-block';

const Contact = () => {

  return (
    <React.Fragment>
  
  <div className='main2'>
            <div className="gallery">
               
            <NameBlock />
           
            <div className="gallery__item gallery__item--2">
              
                    <div className="resume-text gallery__item--2">
                        <h2>EDUCATION</h2>
                        <p>2008-2013. Vinnytsia National Technical University. 
                            Faculty of Information Technologies and Computer Engineering. 
                            Specialty - computer systems and networks</p>
                    </div>
         
                    <div className="resume-text gallery__item--3">
                        <h2>EDUCATION</h2>
                        <p>2008-2013. Vinnytsia National Technical University. 
                            Faculty of Information Technologies and Computer Engineering. 
                            Specialty - computer systems and networks</p>
                    </div>
                    <div className="resume-text">
                        <h2>EDUCATION</h2>
                        <p>2008-2013. Vinnytsia National Technical University. 
                            Faculty of Information Technologies and Computer Engineering. 
                            Specialty - computer systems and networks</p>
                    </div>
            </div>
            <div className="gallery__item gallery__item--4">
                <Link to='/'>
                    <div className="menu-item">
                        <h2>Контакти</h2>
                    </div>
                </Link>
            </div>

            </div>   
        </div>

    </React.Fragment>
 )    
};

export default Contact;