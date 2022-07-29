import React from "react";
import { useState, useEffect } from "react";

export default function register_login() {
  const [rmessage, setRmessage] = useState([]);
  const token = localStorage.getItem("token")


  return (
    <div className="registerLogin">
      <div className="register">
        <h3>Register</h3>
        <p>Create a new account for free by simplying entering in your email and password.</p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const url = "http://localhost:3000/user/register"
            return fetch(url, {
              method: "POST",
              headers: { accept: "application/json", "Content-Type": "application/json" },
              body: JSON.stringify({ email: `${event.target.elements.remail.value}`, password: `${event.target.elements.rpassword.value}` })
            })
              .then((res) => res.json())
              .then((data) => setRmessage(data.message))
          }}
        >
          <label className="email" htmlFor="remail">Email:</label>
          <input id="remail" remail="remail" type="text" />
          <label htmlFor="rpassword"> Password:</label>
          <input id="rpassword" rpassword="rpassword" type="text" />
          <br /><button type="submit" >Register</button>
        </form>
        <p>{rmessage}</p>
      </div>


      <div className="login">
        <h3>Sign in</h3>
        <p>Sign in with the same email and password used to create an account.</p>
        <form to="/"
          onSubmit={(event) => {
            setTimeout(function () { window.location.reload(); }, 500);
            event.preventDefault();
            const url = "http://localhost:3000/user/login";
            return fetch(url, {
              method: "POST",
              headers: { accept: "application/json", "Content-Type": "application/json" },
              body: JSON.stringify({ email: `${event.target.elements.lemail.value}`, password: `${event.target.elements.lpassword.value}` })
            })
              .then((res) => res.json())
              .then((res) => { localStorage.setItem("token", res.token) })
          }}
        >
          <label htmlFor="lemail">Email:</label>
          <input id="lemail" lemail="lemail" type="text" />
          <label htmlFor="lpassword"> Password:</label>
          <input id="lpassword" lpassword="lpassword" type="text" />
          <br /><button type="submit">Sign in</button>
        </form>
        {token && token === "undefined" ? <p>Wrong Email or Password</p> : null}
        {token && token !== "undefined" ? <p>Log in successful</p> : null}
      </div>
    </div>
  );
}