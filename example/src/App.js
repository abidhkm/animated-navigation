import React, { useState } from 'react';
// import logo from './logo.svg';
import Sample from './Sample'
import Sample2 from './Sample2'
import Sample3 from './Sample3';
import Sample4 from './Sample4';
// import './App.css';
import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom'
import Navigation from 'animated-navigation';

export const Home = () => {
  return <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>
    </header>
  </div>
}

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
          isMounted={showMenu}
          setShowMenu={setShowMenu}
          data={[{ path: '/', component: Home,name:'Home' }, { path: '/sample1', component: Sample, name:'Sample1' },
          { path: '/sample2', component: Sample2,name:'Sample2' },
          { path: '/sample3', component: Sample3,name:'Sample3' }, { path: '/sample4', component: Sample4,name:'Sample4' },
          ]} />


        {
          !showMenu &&
          <Switch>
            <Route path="/sample1">
              <Sample />
            </Route>
            <Route path="/sample2">
              <Sample2 />
            </Route>
            <Route path="/sample3">
              <Sample3 />
            </Route>
            <Route path="/sample4">
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
