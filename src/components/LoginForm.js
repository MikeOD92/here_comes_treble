import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import {useHistory} from 'react-router-dom';
import './LoginForm.css';

export default function LogIn({ setUser, setShowLogin, showLogin }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      history.push('/play');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="loginForm fadeInDown">
      <div className="formContent" onSubmit={handleSubmit}>
        <div className="fadeIn first">
          <img src="https://img.freepik.com/free-vector/note-music-logo-design_93835-645.jpg?size=338&ext=jpg" className="logoImg" alt="logo"/>
        </div>
        <form>
          <input type="text" id="loginEmail" className="fadeIn second" placeholder="email" name="email" value={credentials.email} onChange={handleChange} required />
          <input type="password" id="loginPassword" className="fadeIn third" placeholder="password" name="password" value={credentials.password} onChange={handleChange} required />
          <input type="submit" id="loginSubmit" className="fadeIn fourth" value="Log In" />
        </form>
        <p className="error-message">&nbsp;{error}</p>
        <div id="formFooter" >
          <h5>Need to create an account?</h5>
          <input type="submit" id="loginSwitch" className="underlineHover" onClick={() => setShowLogin(!showLogin)} value='Sign Up' />
        </div>
      </div>
    </div>
  );
}