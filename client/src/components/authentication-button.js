// src/components/authentication-button.js

import React from 'react';

import LoginButton from './login-button';
import LogoutButton from './logout-button';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const saveUser = (user) => {
    return fetch("/api/me", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log("From the post ", data);
//         props.saveStudent(data);
//       });
}

const AuthenticationButton = () => {
    
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {

    if(isAuthenticated){
        saveUser(user);
    }
    

  }, [isAuthenticated, user])

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;