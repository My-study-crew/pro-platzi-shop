import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/index';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

    // Token saved on local storage
    if (access_token) {
      const Token = access_token.access_token;
      Cookie.set('token', Token, { expires: 5 });

      // Getting profile with token in cookie
      axios.defaults.headers.Authorization = `Bearer ${Token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  const logOut = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;

    // Redirect to login page
    window.location.href = '/login';
  };

  return { user, signIn, logOut };
}
