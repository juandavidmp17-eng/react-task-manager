
import './TodoSearch.css';

function TodoSearch({ value, onChange }) {
  return (
    <input
      className="TodoSearch"
      type="search"
      placeholder="Buscar TODO..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Buscar tareas"
    />
  );
}

export { TodoSearch };
