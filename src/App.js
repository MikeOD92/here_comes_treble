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

  const twinkleLittleStar=['G', 'G', 'D','D','E', 'E', 'D', 'C', 'C','B','B', 'A', 'A', 'G', 'D','D','C', 'C','B','B', 'A', 'D', 'D', 'C', 'C','B','B', 'A', 'A', 'G', 'G', 'D','D','E', 'E', 'D', 'C', 'C','B','B', 'A', 'A', 'G'];
  const twinkleTitle = 'Twinkle Twinkle Little Star';

  const oldMcD=['C', 'C', 'C','G','A', 'A', 'G', 'E', 'E','D','D', 'C', 'G', 'C', 'C','C','A', 'A','G','E', 'E', 'D', 'D', 'C', 'C','G','G','C', 'C', 'C', 'G', 'G','C','C', 'C', 'C','C','C', 'C', 'C','C','C', 'C', 'C','C','C', 'C', 'C','G', 'A','A','G', 'E', 'E','D','D','C'];
  const mcDTitle = "Old McDonald Had a Farm";

  const mlittleLamb = ['A','G','F','G', 'A', 'A', 'A', 'G', 'G', 'G', 'A', 'A', 'A', 'A', 'G', 'F', 'G', 'A', 'A', 'A', 'A', 'G', 'G', 'A', 'G', 'F'];
  const maryTitle = "Mary Had a Little Lamb";

  return (
    <div className="App">
      <>
      <Top user={user} handleLogOut={handleLogOut}/>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/play" component={Homepage}/>
        <Route exact path="/login" render={()=><AuthPage setUser={setUser}/>}/>
        <Route exact path="/game/mary-had-a-little-lamb" render={()=><Gamepage songTitle={maryTitle} song={mlittleLamb}/>}/>
        <Route exact path="/game/old-mcdonald" render={()=><Gamepage songTitle={mcDTitle} song={oldMcD}/>}/>
        <Route exact path="/game/twinkle-twinkle" render={()=><Gamepage songTitle={twinkleTitle} song={twinkleLittleStar}/>}/>
      </Switch>
      </>
      {/* <Homepage/> */}
      {/* <Gamepage song={oldMcD} songTitle="wowza"/> */}
      {/* <AuthPage setUser={setUser} /> */}
    </div>
  );  
}
