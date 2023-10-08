import { FaTimes } from 'react-icons/fa';
const Task = ({ task, onDelete, doubleClick }) => {
    return (
        // <div className={`task ${task.reminder ? ' reminder' : ''}`} onDoubleClick={() => doubleClick(task.id)}>
        <div
            className={`task ${task.reminder && 'reminder'}`}
            onDoubleClick={() => doubleClick(task.id)}
        >
            <h3> {task.text}
                <FaTimes className='faTimes' onClick={() => onDelete(task.id)} />
            </h3>
            <p> {task.day} </p>
        </div>
    );

}
export default Task;