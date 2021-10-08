import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Page404 from './pages/404';
import Home from './pages/Home';


const App = () => <div>
  <BrowserRouter>
    <Switch>

      <Route path="/manifest" exact>
        Manifest
      </Route>
      
      <Route path="/doneer" exact>
        Doneer
      </Route>
      
      <Route path="/help-ons" exact>
        Formulier inschrijven als vrijwilliger/contact
      </Route>
      
      <Route path="/nieuws" exact>
        Nieuws
      </Route>

      <Route path="/materiaal" exact>
        materiaal om te downloaden
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
