import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const navigate = useNavigate();

  const checkValidation = () => {
    if (email === "" && password === "") {
      setFormError(true);
      setErrorMessage("email and password must not be empty");
    } else if (email === "") {
      setFormError(true);
      setErrorMessage("email is required");
    } else if (!emailValidation()) {
      setFormError(true);
      setErrorMessage("invalid email");
    } else if (password === "") {
      setFormError(true);
      setErrorMessage("password is required");
    } else if (password.length < 8) {
      setFormError(true);
      setErrorMessage("password must be at least 8 characters");
    }
  };

  const emailValidation = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validRegex);
  };

  const handleEmailInput = (e) => {
    setFormError(false);
    setErrorMessage("")
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setFormError(false);
    setErrorMessage("")
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    checkValidation();
    if (!formError) {
      console.log("login");
    }
  };
  return (
    <div>
      <div className="login-top">
        <div>
          <div className="login-logo">
            <div style={{ width: "25px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2Z"
                  fill="rgba(255,255,255,1)"
                ></path>
              </svg>
            </div>
            <h3 className="ml-2 mt-0.5">WordCraft App</h3>
          </div>
          <h3 style={{ marginTop: "30px" }} className="login-text-2">
            Sign In and continue to do work
          </h3>
          <h3 className="login-text-2">of creating the Blog / Post for</h3>
          <h3 className="login-text-2">millions of users.</h3>
          <h4 className="login-text-3">
            Wordcraft is an open-source application which provides end to end
            privacy with social media features to their users.
          </h4>
        </div>
        <div className="login-form">
          <h3 className="sign-in-text">Sign In and continue.</h3>
          <div className="input-field">
            <h4>E-mail ID</h4>
            <input
              name={email}
              value={email}
              onChange={(e) => handleEmailInput(e)}
              className="input-text"
              type="text"
              placeholder="aniket.raikwar@gmail.com"
            />
          </div>
          <div className="input-field">
            <h4>Password</h4>
            <div className="password-input">
              <input
                name={password}
                value={password}
                onChange={(e) => handlePasswordInput(e)}
                className="input-text"
                type={showPassword ? "password" : "text"}
                placeholder="# # # # # # # #"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{ width: "20px" }}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457ZM14.7577 16.1718L13.2937 14.7078C12.902 14.8952 12.4634 15.0002 12.0003 15.0002C10.3434 15.0002 9.00026 13.657 9.00026 12.0002C9.00026 11.537 9.10522 11.0984 9.29263 10.7067L7.82866 9.24277C7.30514 10.0332 7.00026 10.9811 7.00026 12.0002C7.00026 14.7616 9.23884 17.0002 12.0003 17.0002C13.0193 17.0002 13.9672 16.6953 14.7577 16.1718ZM7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925L16.947 12.7327C16.9821 12.4936 17.0003 12.249 17.0003 12.0002C17.0003 9.23873 14.7617 7.00016 12.0003 7.00016C11.7514 7.00016 11.5068 7.01833 11.2677 7.05343L7.97446 3.76015Z"
                      fill="rgba(67,67,67,1)"
                    ></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"
                      fill="rgba(67,67,67,1)"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className={formError ? "form-error" : "form-not-error"}>
            {formError ? errorMessage : ""}
          </div>
          <div onClick={handleLogin} className="login-btn">
            <p>Login</p>
            <div style={{ width: "20px", marginLeft: "10px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                  fill="rgba(255,254,254,1)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="login-bottom">
        New User? <span onClick={() => navigate('/register')}  className="blue-text">Create New Account.</span>
      </div>
    </div>
  );
};

export default Login;
