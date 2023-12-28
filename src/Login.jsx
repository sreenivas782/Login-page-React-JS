import React, { useState } from "react";
import "./App.css";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function loginHandler(e){
  e.preventDefault();
}  
  return (
    <div className="Log">
      
      <form onSubmit={loginHandler}>
        <h3> LOGIN FORM</h3>
        <lable for="user">User name : </lable>
        <input
          type="email"
          placeholder="enter user name"
          name="user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <lable for="pass">Password : </lable>
        <input
          type="Password"
          placeholder="enter password"
          name="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <br />
      <button type="submit">Login</button>
    </div>
  );
};

export default Login;
