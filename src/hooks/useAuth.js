import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import Axios from 'axios';
import endPoints from '@services/api/index';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        'access-control-allow-origin': '*',
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    // Axios get method error, requested service error
    const { data: access_token } = await Axios.post(endPoints.auth.login, { email, password }, options);
    // Token saved on local storage
    if (access_token) {
      Cookie.set('token', access_token.access_token, { expires: 5 });
    }
  };

  return { user, signIn };
}
