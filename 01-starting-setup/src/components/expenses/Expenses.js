import Card from '../UI/card/Card';
import ExpenseItem from '../expenseItem/ExpenseItem'
import "./Expenses.css";

 const Expenses = (props) => {
  return (
    <Card className='expenses'>
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