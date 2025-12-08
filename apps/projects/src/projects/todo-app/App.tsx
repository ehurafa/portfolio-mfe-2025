import { useState } from 'react';
import './styles.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1>📝 To-Do List</h1>
        <div className="todo-input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">
            Add
          </button>
        </div>

        {todos.length === 0 ? (
          <p className="empty-state">No tasks yet. Add one above! 👆</p>
        ) : (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="todo-footer">
          <span>{todos.filter(t => !t.completed).length} items left</span>
          <span>{todos.filter(t => t.completed).length} completed</span>
        </div>
      </div>
    </div>
  );
}
