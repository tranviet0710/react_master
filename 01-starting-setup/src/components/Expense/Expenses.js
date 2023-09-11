import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import React, { useState } from 'react';
function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('');

    const changeYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = selectedYear === '' ? props.items : props.items.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    let expensesContent = <p className='text-info'>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item, index) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                price={item.amount}
                date={item.date} />
        ))
    }
    return (
        <div className="expenses">
            <ExpensesFilter selectedYear={selectedYear} onYearChange={changeYearHandler} />
            <Card >
                {expensesContent}
            </Card>
        </div>
    )
}
export default Expenses;