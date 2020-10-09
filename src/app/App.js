import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/main-page/main-page';
import Main2 from '../pages/main-page/main-page2';
import '../component/sass/main.scss';

const App = () => {
  return (
 <React.Fragment>
   <Main2 />


        {/* <Switch>
          <Route exact path='/' component={Main2} />
          <Route  path='/test' component={Main} />
        </Switch> */}
    
 </React.Fragment>
  );
}

export default App;


