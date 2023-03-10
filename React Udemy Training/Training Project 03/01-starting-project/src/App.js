import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  const deleteUserHandler = (userId) =>{
    setUsersList(prevUsers => {
      const updatedUserList = prevUsers.filter(user => user.id !== userId);
      return updatedUserList;
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
