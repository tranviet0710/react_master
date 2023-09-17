import styles from "./InvestForm.module.css";
import React, { useState } from "react";
const defaultUserInput = {
  "current-savings": 0,
  "yearly-contribution": 0,
  "expected-return": 0,
  duration: 0,
};
const InvestForm = (props) => {
  const [userInput, setUserInput] = useState(defaultUserInput);
  const submitHandler = (event) => {
    event.preventDefault();
    props.calculate(userInput);
  };

  const onChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: +value,
      };
    });
  };

  const resetHandler = (event) => {
    event.preventDefault();
    setUserInput(defaultUserInput);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              onChangeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              onChangeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              onChangeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              onChangeHandler("duration", event.target.value)
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default InvestForm;
