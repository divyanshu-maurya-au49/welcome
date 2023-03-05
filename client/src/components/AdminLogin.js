import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function AdminLogin() {
  const navigate=useNavigate()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const AdminLogin = async (e) => {
      e.preventDefault();
      
      const res = await fetch("/api/users/adminlogin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          
        }),
      });
      const data = await res.json();
      if (res.status === 400 ) {
        window.alert("You are not admin, Contact to owner");
      } else {
        localStorage.setItem("Adminlogin", "true");
        localStorage.setItem("login", "true");
        alert(`Welcome back Admin`);
        const reload = window.location.reload("/");
        
      navigate(reload);
      }
    };
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
          <h2>Welcome Admin Pannel</h2>
            <h2>login</h2>

            <input
              type="email"
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

            <button className="btn btn-primary mt-3" onClick={AdminLogin}>
              Login
            </button>
           <a href="/"> Login as user </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
