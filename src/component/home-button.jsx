import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const HomeButton = () => (
    <Link to='/'>
    <div className="">
        Home Button
    </div>

    </Link>


);

export default HomeButton;