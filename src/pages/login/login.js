import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import requestHandler from "../../utils/GenFetch";
import { startSession } from "../../features/loginSlice";




function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false)


  const handleChangeName=(event)=>{
    setUsername(event.target.value)

  }

  const handleChangePassword=(event)=>{
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!password?.length || !username?.length) return
    const baseUrl = 'http://localhost:3001/api/v1'
    

    const postApi = async () => {
      const bodyPost = {
          email : username,
          password : password
        }
      const response = await requestHandler({
          url: `${baseUrl}/user/login/`,
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyPost),
          errMsg: 'Fail to login ! Please Retry.'
      });
      if (response.status === 200) {
          setErrorLogin(true) 
          dispatch(startSession(response?.body?.token));
          navigate("/user");
      } else {
          setErrorLogin(true)
          toast.error('Password not correct !')
      }
  };
  postApi();
  }
  
    return (
    <main class="main bg-dark">
    <section class="sign-in-content">
      <i class="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div class="input-wrapper">
          <label for="username">Username</label
          ><input 
          type="text" 
          id="username"
          value={username}
          onChange={handleChangeName} />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label
          ><input 
          type="password" 
          id="password"
          value={password}
          onChange={handleChangePassword} />
          
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" /><label for="remember-me"
            >Remember me</label
          >
        </div>
        <button class="sign-in-button" type="submit">Sign In</button>
        {errorLogin ? (<div className="error-message">Fail to login <br /> Please, retry !</div>) : null}

      </form>
    </section>
  </main>
  );}
    
    export default Login;