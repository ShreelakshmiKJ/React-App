import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{

const saveExpenseDataHandler = (enteredExpenseData) =>{
console.log('From NewExpenseparent')
const expenseData = {
    ...enteredExpenseData,
    id : Math.random().toString()
}
props.onExpenseAdded(expenseData)
// console.log(expenseData)
}

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
        </div>
    )
}
export default NewExpense;