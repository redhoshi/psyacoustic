import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function Login() {
const navigate = useNavigate();

  return (
    <div>
        <GoogleLogin
        onSuccess={credentialResponse => {
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded);
          console.log(decoded.email);
          navigate('/CollectCard', {state:decoded.email});
          // link to collect card
          /*history.push({
            pathname: '/receiver',
            state: { message: decoded.email }
          });*/
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </div>
  );
}

export default Login;
