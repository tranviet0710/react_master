import React, { useContext } from "react";
import Button from "../Button";
import AuthContext from "../../store/AuthContext";

const Home = (props) => {
  const { logout } = useContext(AuthContext);
  const logoutHandler = () => {
    logout();
  };
  return (
    <div>
      <h1>Welcome back!</h1>
      <Button onClick={logoutHandler} text="Log out" />
    </div>
  );
};

export default Home;
