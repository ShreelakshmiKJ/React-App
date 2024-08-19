import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import ExpenseForm from './components/NewExpenses/ExpenseForm';
import ExpenseContextProvider, { ExpenseContext } from './store/expense-context';
import ExampleComponent from './components/ExampleComponent';

// function App() 
const App = () => {

  return (
    <ExpenseContextProvider>
      <div>
      <h2>::  Expense Management application ::</h2>
      <NewExpense>
      <ExpenseForm />
      </NewExpense>
       <Expenses />

      <ExampleComponent></ExampleComponent>

    </div>
    </ExpenseContextProvider>
    
  );
}

export default App;
