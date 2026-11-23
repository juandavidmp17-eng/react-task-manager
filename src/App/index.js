import { useState } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../Hooks/useLocalStorage';
import '../App.css';


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
  };

  return (
    <AppUI
  completedTodos={completedTodos}
  todos={todos}
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  filteredTodos={filteredTodos}
  toggleTodo={toggleTodo}
  deleteTodo={deleteTodo}
  newTodoValue={newTodoValue}
  setNewTodoValue={setNewTodoValue}
      filter={filter}
      setFilter={setFilter}
      showNewTodoForm={showNewTodoForm}
      setShowNewTodoForm={setShowNewTodoForm}
      addTodo={addTodo}
    />


  );


}

export default App;
