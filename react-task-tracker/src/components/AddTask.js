import React from 'react'
import { useState } from 'react'
const AddTask = ({ saveTask }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);
    const addTask = (e) => {
        e.preventDefault();
        if (!text) {
            alert("Please add a task");
            return
        }
        saveTask({ text, date, reminder });
        setText('');
        setDate('');

        setReminder(false);
    }
    return (

        <form className="add-form" onSubmit={addTask}>
            <div className="form-control">
                <label>Tasks</label>
                <input type="text" placeholder='Add Task'
                    value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time'
                    value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder}
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save Task" className='btn btn-block' />
        </form>
    )
}

export default AddTask