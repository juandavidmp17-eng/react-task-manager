import './TodoCounter.css';


function TodoCounter({ completed, total }) {
  return (
    <h1 className="TodoCounter">
      Has completado{' '}
      <span>
        {completed} de {total} TODOs
      </span>
    </h1>
  );
}

export { TodoCounter };
