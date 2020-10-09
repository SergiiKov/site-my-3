import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from '../pages/main-page/main-page';
import Main2 from '../pages/main-page/main-page2';
import About from '../pages/main-page/about-page';
import Resume from '../pages/main-page/resume-page';
import '../component/sass/main.scss';

const App = () => {
  return (
 <React.Fragment>
     <Router>
   {/* <Main2 /> */}


        <Switch>
          <Route exact path='/' component={Main2} />
          <Route  path='/about' component={About} />
          <Route  path='/resume' component={Resume} />
        </Switch>
        </Router>
 </React.Fragment>
  );
}

export default App;


