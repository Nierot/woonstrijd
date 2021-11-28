import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Page404 from './pages/404';
import AboutUs from './pages/AboutUs';
import Background from './pages/Background';
import Donate from './pages/Donate';
import HelpUs from './pages/HelpUs';
import Home from './pages/Home';
import Manifest from './pages/Manifest';
import Materials from './pages/Materials';
import News from './pages/News';
import Register from './pages/Register';
import Speeches from './pages/Speeches';


const App = () => <div>
  <BrowserRouter>
    <Switch>

      <Route path="/manifest" exact>
        <Manifest />
      </Route>

      <Route path="/wie-zijn-wij" exact>
        <AboutUs />
      </Route>

      <Route path="/achtergrond" exact>
        <Background />
      </Route>
      
      <Route path="/doneer" exact>
        <Donate />
      </Route>
      
      <Route path="/help-ons" exact>
        <HelpUs />
      </Route>
      
      <Route path="/nieuws" exact>
        <News />
      </Route>

      <Route path="/materiaal" exact>
        <Materials />
      </Route>

      <Route path="/aanmelden" exact>
        <Register />
      </Route>

      <Route path="/speeches" exact>
        <Speeches />
      </Route>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  </BrowserRouter>
</div>

export default App;
