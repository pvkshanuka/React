import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expensesItem) => (
        <ExpenseItem
          key={expensesItem.id}
          title={expensesItem.title}
          amount={expensesItem.amount}
          date={expensesItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
