import React from 'react';

import Particles from 'react-particles-js';
import { Component } from 'react';
 
function Particl() { 
    return ( 
      <div className="App"> 
      <div className='test'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo maxime veniam ad?
      </div>

        <Particles 
          params={{ 
            particles: { 
              number: { 
                value: 200, 
                density: { 
                  enable: true, 
                  value_area: 1000, 
                } 
              }, 
            }, 
          }} 
        /> 
     
      </div> 
    ); 
  } 

export default Particl;


