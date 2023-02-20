import { Fragment } from "react";
import Card from "../../UI/Card/Card";

import classes from "./UsersList.module.css";

const UserList = (props) => {
  const users = props.users;

  const onDeleteHandler = (event) =>{
    props.onDeleteUser(event.target.id);
  }

  return (
    <Fragment>
      <Card className={classes.users}>
        {users.length > 0 ? (
          <ul>
            {props.users.map((user) => (
              <li key={user.id} id={user.id} onClick={onDeleteHandler}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        ) : (
          <p>No data to display</p>
        )}
      </Card>
    </Fragment>
  );
};

export default UserList;
