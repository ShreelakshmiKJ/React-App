import { createContext } from "react";
import { useState } from 'react';


export const ExpenseContext = createContext({
    items: [],
    onSaveExpenseData: () => {}
})

export default function ExpenseContextProvider({children}){
    const DUMP_EXPENSES = [
        {id:"e1", title: 'Sony TV', amount: 800.49, date: new Date(2021,2,10)},
        {id:"e2", title: 'Car Insurance', amount: 500.49, date: new Date(2021,2,11)},
        {id:"e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023,2,12)},
        {id:"e4", title: 'New Bike', amount: 900.49, date: new Date(2024,2,13)}
      ]

  const [expenses, setExpenses] = useState(DUMP_EXPENSES);

  const addExpenseHandler = expense =>{
    // console.log('In App')
    // console.log(expense)
    const expenseData = {
      ...expense,
      id : Math.random().toString()
    }
    setExpenses(
      (prevExpenses) => { //call back fn
        return [expenseData, ...prevExpenses] //add 1 record on top of existing array(...prevExpenses)
      }
    )
  }

  const contextValue = {items : expenses, onSaveExpenseData : addExpenseHandler}

  return <ExpenseContext.Provider value = {contextValue}>
  {children}
  </ExpenseContext.Provider>

}