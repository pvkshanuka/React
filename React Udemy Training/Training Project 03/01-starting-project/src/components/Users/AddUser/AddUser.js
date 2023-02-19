import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [entererUsername, setEntererUsername] = useState("");
  const [entererAge, setEntererAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (entererUsername.trim().length === 0 || entererAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (not-empty values).",
      });
      return;
    }
    if (+entererAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(entererUsername, entererAge);
    setEntererUsername("");
    setEntererAge("");
  };

  const userNameChangeHandler = (event) => {
    setEntererUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEntererAge(event.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={entererUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={entererAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
