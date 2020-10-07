import React from 'react';
import Navigation from './components/common/navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PageRenderer from './page-renderer';
import Home from './pages/home';

function App() {
  const user = {
    firstName: 'HS',
    lastName: 'Coder'
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation user = {user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" component={Home} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
