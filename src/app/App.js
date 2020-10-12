import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Main from '../pages/main-page';
import About from '../pages/about-page';
import Resume from '../pages/resume-page';
import Contact from '../pages/contact-page';
import '../component/sass/main.scss';

const App = () => {
  return (
 <React.Fragment>
     <Router>
   {/* <Main2 /> */}


        <Switch>
          <Route exact path='/' component={Main} />
          <Route  path='/about' component={About} />
          <Route  path='/resume' component={Resume} />
          <Route  path='/contact' component={Contact} />
        </Switch>
        </Router>
 </React.Fragment>
  );
}

export default App;


