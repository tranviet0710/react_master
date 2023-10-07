import React, { useContext, useState } from "react";
import axios from "axios";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

const Login = (props) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToSignUpPage = () => {
    navigate("/register");
  };
  const loginHandler = async (event) => {
    event.preventDefault();
    const loginData = await axios
      .post("http://localhost:5001/api/users/n-a/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          return res;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    if (loginData?.data.success === true) {
      login();
      localStorage.setItem("accessToken", loginData.data.data.accessToken);
    }
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="">
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
            className="m-5 border-black border"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
            className="m-5 border-black border"
          ></input>
        </div>
        <Button text="Login" className="mb-5"></Button>
      </form>
      <div>
        <Button text="Sign up" onClick={goToSignUpPage}></Button>
      </div>
    </div>
  );
};

export default Login;
