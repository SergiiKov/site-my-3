import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Particles from 'react-particles-js';
import { Component } from 'react';

import NameBlock from '../component/name-block';
import ContactBlock from '../component/contact-block';
import HomeButton from '../component/home-button';
 
function Particl() { 
    return ( 
      <div className="App"> 
      <div className='particles'>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime veniam ad? */}
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

        <Particles 
 params={{
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 400,
              "duration": 4
          }
      }
  }
}}
        /> 
     
      </div> 
    ); 
  } 

export default Particl;


