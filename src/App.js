import React, { useState, useEffect } from 'react';
import './App.css';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Switch, Route } from "react-router-dom";
import { Credentials } from "./spotify/credentials";
import axios from "axios";
import { Navi } from './components/Navi';
function App() {
  const [token, setToken] = useState("")

  const spotify = Credentials()

  useEffect(()=>{
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    }).then(res=>{

      setToken(res.data.access_token);
      axios.get("https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks", {
        headers: { 'Authorization' : 'Bearer ' + res.data.access_token}
      }).then(res=>console.log(res))
    
    })

  },[])

  return (
    <div >
      <Navi/>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
