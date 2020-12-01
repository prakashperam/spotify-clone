import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  //useeffect code runs based on the condition
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token){
      setToken(_token)
    }

  },[])

  return (
    <div className="App">

      {
        token ?(
          <h1>I am player</h1>
        ) :(

          <Login />     
        )

      }
    </div>
  );
}

export default App;
