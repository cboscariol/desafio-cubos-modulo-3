import { useState } from "react";
import { useLocalStorage } from 'react-use';

export default function useAuthProvider() {
  const [tokenPersistido, setTokenPersistido, removeTokenPersistido] = useLocalStorage('TOKEN', null);
  const [userPersistido, setUserPersistido, removeUserPersistido] = useLocalStorage('USER', null);

  const [token, setToken] = useState(tokenPersistido);
  const [user, setUser] = useState(userPersistido);

  const saveUser = (data) => {
    setUser({ ...user, ...data })
    setUserPersistido({ ...user, ...data })
  }


  const logar = (token) => {
    setToken(token);
    setTokenPersistido(token);
  }

  const deslogar = () => {
    setToken(null);
    setUser({})
    removeTokenPersistido();
    removeUserPersistido();
  }

  return {
    token,
    logar,
    deslogar,
    saveUser,
    user,
  };
}