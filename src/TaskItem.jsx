export default function TaskItem({ task, onDelete }) {
    return (
        <li key={task.id}>
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => onDelete(task.id)}>
             Удалить
            </button>
        </li>
    );
}