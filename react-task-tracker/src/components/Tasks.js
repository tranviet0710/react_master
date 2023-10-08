import Task from "./Task";
const Tasks = ({ tasks, onDelete, doubleClick }) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} doubleClick={doubleClick} />
            ))}
        </>
    );
}
export default Tasks;