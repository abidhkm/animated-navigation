# animated-navigation
> Demo find here http://animated-navigation.surge.sh

> provides navigation page with animation

[![NPM](https://img.shields.io/npm/v/animated-navigation.svg)](https://www.npmjs.com/package/animated-navigation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save animated-navigation
```

## Usage

```jsx
import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom'
import Navigation from 'animated-navigation';

const Dummy = (props) => { // this is for getting the history object from react-router
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
        <Dummy //we need to pass history from react router as well, thats why using this Dummy
          onNavigate={onNavigate} //callback when routing to another page
          showMenu={showMenu} // if true , shows all the list of available pageS. if false shows the page corresponding to the URL
          setShowMenu={setShowMenu} // function for changing the value of showMenu
          data={ //available page list, keep note order is important
            [{ path: '/', component: Home, name: 'Home' },
          { path: '/page1', component: Sample, name: 'page1' },
          { path: '/page2', component: Sample2, name: 'page2' },
          { path: '/page3', component: Sample3, name: 'page3' },
          { path: '/page4', component: Sample4, name: 'page4' }]
          } />
        {
          !showMenu && //when the nav is visible, we don't need to show the current page which is pointed by the URL , we need only the nav list
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
```

## License

MIT © [abidhkm](https://github.com/abidhkm)
