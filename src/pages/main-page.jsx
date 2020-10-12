import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Main = () => {

  return (
    <React.Fragment>
  
  <div className='main2'>
            <div className="gallery">
                <div className="gallery__item gallery__item--1">
                    <div className="name">
                        <div className="letter1">К</div>
                        <div className="letter2">о</div>
                        <div className="letter2">в</div>
                        <div className="letter2">т</div>
                        <div className="letter2">у</div>
                        <div className="letter2">н</div>
                        <div className="letter2">С</div>
                        <div className="letter2">е</div>
                        <div className="letter2">р</div>
                        <div className="letter2">г</div>
                        <div className="letter2">і</div>
                        <div className="letter2">й</div>
                    </div>
                </div> 
           
            <div className="gallery__item gallery__item--2">
                <Link to='/about'>
                    <div className="menu-item">
                        <h2>Привіт!</h2>
                    </div>
                </Link>
            </div>
            <div className="gallery__item gallery__item--3">
                <Link to='/resume'>
                    <div className="menu-item">
                        <h2>Резюме</h2>
                    </div>
                </Link>
            </div>
            <div className="gallery__item gallery__item--4">
                <Link to='/contact'>
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

export default Main;