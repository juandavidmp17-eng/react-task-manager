import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
import { CreateTodoButton } from './CreateTodoButton.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>

   <CreateTodoButton/>

    </div>
  );
}


export default App;
