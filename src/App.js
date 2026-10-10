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
  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length;

  function toggleTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function addTodo(event) {
    event.preventDefault();
    if (newTodoValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: newTodoValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTodoValue('');
    setShowNewTodoForm(false);
  }

  return (
    <div className="App">
      <TodoCounter
        completed={completedTodos}
        total={todos.length}
      />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.id)}
          />
        ))}
      </TodoList>

      {showNewTodoForm && (
        <form className="CreateTodoForm" onSubmit={addTodo}>
          <input
            className="CreateTodoForm-input"
            type="text"
            placeholder="Añadir nuevo TODO"
            value={newTodoValue}
            onChange={(event) => setNewTodoValue(event.target.value)}
            autoFocus
            aria-label="Nombre del nuevo TODO"
          />

          <div className="CreateTodoForm-actions">
            <button type="submit">Guardar TODO</button>
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

      <CreateTodoButton onClick={() => setShowNewTodoForm(true)} />
    </div>
  );
}

export default App;
