import React from "react";

const Home = (props) => {
  const logoutHandler = () => {
    props.onLogout();
  };
  return (
    <div>
      <h1>Welcome back!</h1>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Home;
