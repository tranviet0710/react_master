import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import React, { useState } from 'react';
function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const changeYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = selectedYear === '' ? props.items : props.items.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onYearChange={changeYearHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </div>
    )
}
export default Expenses;