import './ExpenseList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
const ExpenseList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    price={item.amount}
                    date={item.date} />
            ))
            }
        </ul>
    )
}
export default ExpenseList;