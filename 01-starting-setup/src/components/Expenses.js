import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
    const expenses = props.items;
    return (
        <Card className="expenses">
            {expenses.map((item, index) => (
                <ExpenseItem
                    title={item.title}
                    price={item.amount}
                    date={item.date} />
            ))
            }
        </Card>
    )
}
export default Expenses;