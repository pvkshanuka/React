import Card from '../UI/card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import "./Expenses.css";
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

 const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear =>{
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear}/>
        {props.items.map(expensesItem =>(
        <ExpenseItem
        title={expensesItem.title}
        amount={expensesItem.amount}
        date={expensesItem.date}
         />
      ))}
    </Card>
  )
}

export default Expenses;