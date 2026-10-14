import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

const initialTodos = [
  { id: 1, text: 'Hacer ejercicio', completed: true },
  { id: 2, text: 'Estudiar React', completed: false },
  { id: 3, text: 'Comprar comida', completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodoValue, setNewTodoValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length;

  const normalizedSearch = searchValue.trim().toLowerCase();

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(normalizedSearch)
  );

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
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

    setTodos((currentTodos) => [...currentTodos, newTodo]);
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

      <TodoList>
        {searchedTodos.map((todo) => (
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
