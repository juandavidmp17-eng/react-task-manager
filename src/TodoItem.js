
import './TodoItem.css';

function TodoItem({ text, completed, onComplete }) {
  return (
    <li className="TodoItem">
      <button
        type="button"
        className={`TodoItem-checkbox ${
          completed ? 'TodoItem-checkbox--active' : ''
        }`}
        onClick={onComplete}
        aria-label={
          completed
            ? `Marcar ${text} como pendiente`
            : `Marcar ${text} como completada`
        }
        aria-pressed={completed}
      >
        {completed ? '✓' : ''}
      </button>

      <p
        className={`TodoItem-p ${
          completed ? 'TodoItem-p--completed' : ''
        }`}
      >
        {text}
      </p>

      <button
        type="button"
        className="TodoItem-delete"
        aria-label={`Eliminar tarea: ${text}`}
      >
        X
      </button>
    </li>
  );
}

export { TodoItem };
