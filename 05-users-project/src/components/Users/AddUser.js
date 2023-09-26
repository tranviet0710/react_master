import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [error, setError] = useState("");
  const userNameInput = useRef();
  const ageInput = useRef();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = userNameInput.current.value;
    const enteredAge = ageInput.current.value;
    if (enteredUserName.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a valid username. (not empty)",
      });
      return;
    }
    if (enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age. (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    userNameInput.current.value = "";
    ageInput.current.value = "";
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
          <input id="username" type="text" ref={userNameInput} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
