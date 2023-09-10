import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from '../NewExpense/ExpensesFilter';
function Expenses(props) {
    const expenses = props.items;
    const changeYearHandler = (selectedYear) => {
        props.onYearChange(selectedYear);
    };
    return (
        <div>
            <ExpensesFilter onYearChange={changeYearHandler} />
            <Card className="expenses">
                {expenses.map((item, index) => (
                    <ExpenseItem
                        title={item.title}
                        price={item.amount}
                        date={item.date} />
                ))
                }
            </Card></div>
    )
}
export default Expenses;