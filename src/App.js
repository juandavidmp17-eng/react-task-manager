import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch.js';
import { TodoList } from './TodoList.js';
import { TodoItem } from './TodoItem.js';
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

   <createTodoButton/>

    </div>
  );
}


export default App;
