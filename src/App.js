import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';

const DUMP_EXPENSES = [
  {id:"e1", title: 'Sony TV', amount: 800.49, date: new Date(2021,2,10)},
  {id:"e2", title: 'Car Insurance', amount: 500.49, date: new Date(2021,2,11)},
  {id:"e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023,2,12)},
  {id:"e4", title: 'New Bike', amount: 900.49, date: new Date(2024,2,13)}
]

// function App() 
const App = () => {

const [expenses, setExpenses] = useState(DUMP_EXPENSES);

  const addExpenseHandler = expense =>{
    console.log('In App')
    console.log(expense)
    setExpenses(
      (prevExpenses) => { //call back fn
        return [expense, ...prevExpenses] //add 1 record on top of existing array(...prevExpenses)
      }
    )
  }

  return (
    <div>
      <h2>::  Expense Management application ::</h2>
      <NewExpense onExpenseAdded = {addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
    
  );
}

export default App;
