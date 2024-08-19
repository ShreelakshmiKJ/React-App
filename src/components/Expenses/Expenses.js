import { useContext, useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import ExpenseList from './ExpenseList';
import { ExpenseContext } from '../../store/expense-context';
import { useSelector } from 'react-redux';

const Expenses = (props) => {

    // const expenseCtx = useContext(ExpenseContext);
    const items = useSelector(state => state.items); //useSelector hook = auto subscribes the object

    const [filteredYear, setFilteredYear] = useState("2024");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;