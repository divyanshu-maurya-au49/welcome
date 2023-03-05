import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid usernme or password");
    } else {
      // localStorage.setItem("token", data?.token);
      localStorage.setItem("login", "true");
      alert(`Login Successfull`);
      const reload = window.location.reload("/");
      navigate(reload);
    }
  };

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>login</h2>

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3" onClick={Login}>
              Login
            </button>
            <p>
              New User<a href="/registation"> Register </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
