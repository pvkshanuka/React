import Card from "../../UI/Card/Card";

import classes from "./UsersList.module.css";

const UserList = (props) => {
  const users = props.users;

  return (
    <div>
      <Card className={classes.users}>
        {users.length > 0 ? (
          <ul>
            {props.users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            ))}
          </ul>
        ) : (
          <p>No data to display</p>
        )}
      </Card>
    </div>
  );
};

export default UserList;
