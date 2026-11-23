import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoFilters } from '../TodoFilters';




  function AppUI({
  completedTodos,
  todos,
  searchValue,     
  setSearchValue,
  filteredTodos,
  toggleTodo,  
  deleteTodo,
  newTodoValue,
  setNewTodoValue,    
  filter,
  setFilter,
  showNewTodoForm,
  setShowNewTodoForm,
  addTodo,


  }) {




return (
    <div className="App">
      <TodoCounter
        completed={completedTodos}
        total={todos.length}
      />

      <TodoSearch
        value={searchValue}
        onChange={setSearchValue}
      />

      <TodoFilters
         filter={filter}
         setFilter={setFilter}
        />

      <TodoList>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      {showNewTodoForm && (
        <form className="CreateTodoForm" onSubmit={addTodo}>
          <input
            className="CreateTodoForm-input"
            type="text"
            placeholder="Escribe una nueva tarea..."
            value={newTodoValue}
            onChange={(event) => setNewTodoValue(event.target.value)}
            autoFocus
            aria-label="Nombre de la nueva tarea"
          />

          <div className="CreateTodoForm-actions">
            <button type="submit">Guardar tarea</button>

            <button
              type="button"
              onClick={() => {
                setShowNewTodoForm(false);
                setNewTodoValue('');
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <CreateTodoButton
        onClick={() => setShowNewTodoForm(true)}
      />
    </div>
  );

  }
  
  export { AppUI };
