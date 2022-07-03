import React from 'react';

import Card from './UI/Card';
import './Auth.css';

type AuthProps = {
  onLogin: () => void
};

const Auth = (props: AuthProps) => (
  <div className="auth">
    <Card>
      <h2>You are not authenticated!</h2>
      <p>Please log in to continue.</p>
      <button onClick={props.onLogin}>Log In</button>
    </Card>
  </div>
);

export default Auth;
