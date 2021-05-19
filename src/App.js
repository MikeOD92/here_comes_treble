import { useState } from 'react';
import { getUser } from './utilities/users-service';
import "./App.css";
import AuthPage from "./pages/AuthPage";
import Gamepage from './pages/Gamepage';
import GameImageSlider from './components/GameImageSlider';
import Homepage from './pages/Homepage';
export default function App() {

  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      <Homepage/>
      <Gamepage/>
      <AuthPage setUser={setUser} />
      {user ? 
      (<div>logged in</div> )
      : 
      (<div>logged out</div>)
      }
    </div>
  );  
}
