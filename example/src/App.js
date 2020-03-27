import React, { useState } from 'react';
import Sample from './Sample1'
import Sample2 from './Sample2'
import Sample3 from './Sample3';
import Sample4 from './Sample4';
import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom'
import Navigation from 'animated-navigation';
import { Home } from './Home';

const Dummy = (props) => {
  let history = useHistory();
  return <Navigation {...props} history={history} />
}

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const onNavigate = () => {
    setShowMenu(false)
  }

  return (
    <React.Fragment>
      <Router>
        <Dummy
          onNavigate={onNavigate}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          data={[{ path: '/', component: Home, name: 'Home' },
          { path: '/page1', component: Sample, name: 'page1' },
          { path: '/page2', component: Sample2, name: 'page2' },
          { path: '/page3', component: Sample3, name: 'page3' },
          { path: '/page4', component: Sample4, name: 'page4' },
          ]} />
        {
          !showMenu &&
          <Switch>
            <Route path="/page1">
              <Sample />
            </Route>
            <Route path="/page2">
              <Sample2 />
            </Route>
            <Route path="/page3">
              <Sample3 />
            </Route>
            <Route path="/page4">
              <Sample4 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        }

      </Router>

    </React.Fragment>
  );
}

export default App;
