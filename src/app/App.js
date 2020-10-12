import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Main from '../pages/main-page';
import AboutPage from '../pages/about-page';
import Contact from '../pages/contact-page';
import NameBlock from '../component/name-block';

import '../component/sass/main.scss';

const App = () => {
  return (
 <React.Fragment>
     <Router>
 


        <Switch>
          <Route exact path='/' component={Main} />
          <Route  path='/about' component={AboutPage} />
          <Route  path='/contact' component={Contact} />
        </Switch>
      </Router>


 </React.Fragment>
  );
}

export default App;


