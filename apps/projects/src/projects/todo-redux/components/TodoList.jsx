import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { toggleTodo } from '../slices/todoSlice'

const TodoList = () => {
  const { list, filter } = useSelector(state => state.todos)

  const dispatch = useDispatch()

  return (
    <div>
      <button>Todas</button>
      <button>Completas</button>
      <button>Incompletas</button>
      <ul>
        {list.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={todo.completed ? 'line-through' : null}
            >
              {todo.text}
            </span>
            <button>{todo.text}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
