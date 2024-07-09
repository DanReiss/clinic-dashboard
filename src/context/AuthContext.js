"use client"
import { createContext, useState, useEffect } from "react";
import { authAxios } from "@/app/api";

const Context = createContext();

function AuthProvider({ children }){
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      authAxios.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (data) => {
    try{
      const result = await authAxios.post("/auth/login", {username: data.username, password: data.password});
      const token = result.data.token;

      localStorage.setItem('token', JSON.stringify(token));
      authAxios.defaults.headers.Authorization =`Bearer ${token}`;
    
      return {
        status: 'success'
      }
    } catch(err){
      return {
        status: 'error'
      }
    }
  }

  return (
    <Context.Provider value={{ authenticated, handleLogin }}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider};