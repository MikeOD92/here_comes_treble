import { useState } from 'react';
import { getUser } from './utilities/users-service';
import "./App.css";
import * as userService from './utilities/users-service';
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
import Gamepage from './pages/Gamepage';
import GameImageSlider from './components/GameImageSlider';
import Homepage from './pages/Homepage';
import Top from './components/Top'
import LandingPage from './pages/LandingPage';



export default function App() {

  const [user, setUser] = useState(getUser());

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="App">
      <>
      <Top user={user} handleLogOut={handleLogOut}/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/play" component={Homepage}/>
        <Route exact path="/login" render={()=><AuthPage setUser={setUser}/>}/>
        <Route exact path="/game/mary-had-a-little-lamb" render={()=><Gamepage song="mll"/>}/>
        <Route exact path="/game/old-mcdonald" render={()=><Gamepage song="om"/>}/>
        <Route exact path="/game/twinkle-twinkle" render={()=><Gamepage song="tt"/>}/>
      </Switch>
      </>
      {/* <Homepage/> */}
      {/* <Gamepage song={"mll"}/> */}
      {/* <AuthPage setUser={setUser} /> */}
    </div>
  );  
}
