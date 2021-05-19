import { useState } from 'react';
import { getUser } from './utilities/users-service';
import "./App.css";
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import AuthPage from "./pages/AuthPage";
import Gamepage from './pages/Gamepage';
import GameImageSlider from './components/GameImageSlider';
import Homepage from './pages/Homepage';
import Top from './components/Top'



export default function App() {

  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <>
      <Top/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/login" render={()=><AuthPage setUser={setUser}/>}/>
        <Route exact path="/game/mary-had-a-little-lamb" render={()=><Gamepage song="mll"/>}/>
        <Route exact path="/game/old-mcdonald" render={()=><Gamepage song="om"/>}/>
        <Route exact path="/game/twinkle-twinkle" render={()=><Gamepage song="tt"/>}/>
      </Switch>
      </>
      {/* <Homepage/> */}
      {/* <Gamepage song={"mll"}/> */}
      {/* <AuthPage setUser={setUser} /> */}
      {user ? 
      (<div>logged in</div> )
      : 
      (<div>logged out</div>)
      }
    </div>
  );  
}
