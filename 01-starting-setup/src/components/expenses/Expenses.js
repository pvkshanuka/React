import Card from "../UI/card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
