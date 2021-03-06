import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

export default function AuthPage({ setUser }) { 
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      {showLogin ?
        <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>
        :
        <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>
      }
    </main>
  );
}