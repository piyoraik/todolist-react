import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './components/todolist'

function App() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, input]);
    setInput('');
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_, idx) => idx !== index))
  }

  return (
    <div className="App">
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        onClick={()=>addTodo()}
      >追加</button>
      <Todo
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
