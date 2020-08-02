import React, { useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/index";
import { useStateValue } from "../context/index";

const Login = () => {
  const { state, dispatch } = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then((data) => {
        dispatch({
          type: "SET_ISLOADING",
          payload: true,
        });
        history.push("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise
      .then((data) => {
        dispatch({
          type: "SET_ISLOADING",
          payload: true,
        });
        history.push("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="login">
      <h4>Login / Register</h4>
      <form className="login-form">
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => handleEmailChange(e)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(e) => handlePasswordChange(e)}
        />
        <button
          className="login-button"
          type="submit"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>
        <button type="submit" onClick={(e) => handleRegister(e)}>
          Register
        </button>
      </form>
    </div>
  );
};

export { Login };
