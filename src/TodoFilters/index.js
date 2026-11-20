import './TodoFilters.css';

function TodoFilters({ filter, setFilter }) {
  return (
    <div className="TodoFilters">
      <button
        className={
          filter === 'all' ? 'TodoFilters-button--active' : ''
        }
        onClick={() => setFilter('all')}
      >
        Todos
      </button>

      <div className="TodoFilters__status">
        <button
        className={
          filter === 'pending' ? 'TodoFilters-button--active' : ''
        }
        onClick={() => setFilter('pending')}>
          Pendientes
        </button>
        <button
        className={
          filter === 'completed' ? 'TodoFilters-button--active' : ''
        }
        onClick={() => setFilter('completed')}
        >
          Completadas   
        </button>
      </div>
    </div>
  );
}

export { TodoFilters };