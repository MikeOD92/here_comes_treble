import { useState } from 'react';
import { signUp } from '../utilities/users-service';
import { useHistory } from 'react-router-dom';

export default function SignUp({ setUser, showLogin, setShowLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });
  const history = useHistory()

  const [error, setError] = useState('')

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      delete formData.confirm;
      const user = await signUp(formData);
      setUser(user);
      history.push('/')
    } catch { //can be catch (err)
      //an error occured
      setError('Sign Up Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError('');
  }

  const disable = formData.password !== formData.confirm;
  return (
    <div className="signupForm fadeInDown">
      <div id="formContent" onSubmit={handleSubmit}>
        <div className="fadeIn first">
          <img src="https://img.freepik.com/free-vector/note-music-logo-design_93835-645.jpg?size=338&ext=jpg" alt="logo" width="60" />
        </div>
        <form id="formInputs">
          <input type="text" id="loginName" className="fadeIn second" placeholder="name"  name="name" value={formData.name} onChange={handleChange} required />
          <input type="text" id="loginEmail" placeholder="email" className="fadeIn third" name="email" value={formData.email} onChange={handleChange} required />
          <input type="password" id="loginPassword" placeholder="password" className="fadeIn fourth" name="password" value={formData.password} onChange={handleChange} required />
          <input type="password" id="password" placeholder="confirm password" className="fadeIn fifth" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <input type="submit" className="fadeIn sixth" disabled={disable} value="Sign Up" />
        </form>
        <p className="error-message">&nbsp;{error}</p>
        <div id="formFooter" >
          <h5>Already a user?</h5>
          <input type="submit" className="underlineHover" onClick={() => setShowLogin(!showLogin)} value='Login' />
        </div>
      </div>
    </div>
  );
}