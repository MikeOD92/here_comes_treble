import {Link} from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing">
      <h2>Welcome to Learning with Treble</h2>
      <div className="landingMid">

      <div className="landingOption"> 
        <Link to="/login" className="landingSignup">
          Sign Up 
          <hr/>
          Log In
        </Link>
        <h4>Sign Up or Login to track your progress everytime you play!</h4>
      </div>
      <div className="landingOption">
        <Link to="/play" className="landingStart">
          Start Learning
        </Link>
        <h4>Jump right in and start playing as a guest</h4>
      </div>
      </div>
    </div>
  )
}