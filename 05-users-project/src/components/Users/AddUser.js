import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid username. (not empty)",
      });
      return;
    }
    if (age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age. (> 0)",
      });
      return;
    }
    props.onAddUser(userName, age);
    setAge(0);
    setUserName("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const confirmHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={confirmHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
