import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoFilters } from './TodoFilters';
import { useLocalStorage } from './Hooks/useLocalStorage';
import './App.css';


/*const initialTodos = [
  { id: 1, text: 'Hacer ejercicio', completed: true },
  { id: 2, text: 'Estudiar React', completed: false },
  { id: 3, text: 'Comprar comida', completed: false },
];*/


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [newTodoValue, setNewTodoValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);
  const [filter, setFilter] = useState('all');

  const completedTodos = todos.filter(
    (todo) => !!todo.completed
  ).length;

  const normalizedSearch = searchValue.trim().toLowerCase();

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(normalizedSearch)
  );

  const filteredTodos = searchedTodos.filter((todo) => {
  if (filter === 'pending') {
    return !todo.completed;
  }

  if (filter === 'completed') {
    return todo.completed;
  }

  return true;
});


function toggleTodo(id) {
  const newTodos = todos.map((todo) =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

  saveTodos(newTodos);
}

function deleteTodo(id) {
  const newTodos = todos.filter(
    (todo) => todo.id !== id
  );

  saveTodos(newTodos);
}

  function addTodo(event) {
    event.preventDefault();

    const text = newTodoValue.trim();

    if (!text) return;

    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };

    const newTodos = [...todos, newTodo];saveTodos (newTodos);
    setNewTodoValue('');
    setShowNewTodoForm(false);
  }

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

export default App;
