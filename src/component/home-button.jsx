import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HomeButton = () => (
    <div className="gallery__item gallery__item--8">
    <Link to='/'>
    <div className="">
Home Button
    </div>

    </Link>
    </div> 


);

export default HomeButton;