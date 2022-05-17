import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import Axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const UseAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    setUser('login');
    const mail = email;
    const pass = password;
    console.log(mail, pass);
  };

  return user, signIn;
}
