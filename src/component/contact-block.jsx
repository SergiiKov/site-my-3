import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ContactBlock = () => (
    <div className=''>
    <Link to='/contact'>
        <div className="menu-item">
            <h2>Контакти</h2>
        </div>
    </Link>
</div>

);

export default ContactBlock;