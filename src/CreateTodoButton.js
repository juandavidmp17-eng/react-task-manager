
function CreateTodoButton({ onClick }) {
  return (
    <button
      className="CreateTodoButton"
      type="button"
      onClick={onClick}
      aria-label="Agregar una nueva tarea"
    >
      + Agregar TODO
    </button>
  );
}

export { CreateTodoButton };
