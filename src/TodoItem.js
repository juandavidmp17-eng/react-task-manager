

import './TodoItem.css';

import { CompleteIcon } from './TodoIcon/CompleteIcon';
import { DeleteIcon } from './TodoIcon/DeleteIcon';

function TodoItem({ text, completed, onComplete, onDelete }) {
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
        <CompleteIcon />
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
        onClick={onDelete}
        aria-label={`Eliminar tarea: ${text}`}
      >
        <DeleteIcon />
      </button>
    </li>
  );
}

export { TodoItem };
