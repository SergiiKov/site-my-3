import React  from 'react';

import logobig from '../../img/logo-big.png'; 

import karp_img1 from '../../img/karp/1.jpg'; 
import karp_img2 from '../../img/karp/2.jpg'; 
import karp_img3 from '../../img/karp/3.jpg'; 
import karp_img4 from '../../img/karp/4.jpg'; 
import karp_img5 from '../../img/karp/5.jpg'; 
import karp_img6 from '../../img/karp/6.jpg'; 

const Main = () => {

  return (
    <React.Fragment>
              <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1">
                    <img src={logobig} alt="Gallery Karpaty" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                    <img src={karp_img2} alt="Gallery Karpaty" className="gallery__img" />
                  </figure>
                  <figure className="gallery__item gallery__item--3">
                    <div className='gallery__hover-text'>Resume</div>
                  <img src={karp_img3} alt="Gallery Karpaty" className="gallery__img" />
                  </figure>
                  <figure className="gallery__item gallery__item--4">
                  <img src={karp_img4} alt="Gallery Karpaty" className="gallery__img" />
                  <div className='hover-text'>Project</div>
                  </figure>
                  <figure className="gallery__item gallery__item--5">
                  <img src={karp_img5} alt="Gallery Karpaty" className="gallery__img" />
                  </figure>
                  <figure className="gallery__item gallery__item--6">
                  <img src={karp_img6} alt="Gallery Karpaty" className="gallery__img" />
                  </figure>
                </div>     
            </div>
        </div>
       
    </React.Fragment>
 )    
};

export default Main;
