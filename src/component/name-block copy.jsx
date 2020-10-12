import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NameBlock = () => (
    <div className="gallery__item gallery__item--8">
    <Link to='/'>
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

    </Link>
    </div> 


);

export default NameBlock;