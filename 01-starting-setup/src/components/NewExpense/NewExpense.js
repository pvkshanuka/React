import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
      setIsEditing(false);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const switchEditingHandler = () => {
      setIsEditing(prevState => { return !prevState});
    };

  return (
    <div className="new-expense">
      {!isEditing &&<button onClick={switchEditingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={switchEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
