import * as React from 'react';
import "./ToDoItem.css"

interface ToDoItemProps {
  todo: Todo;
  toggleTodo: toggleTodo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleTodo }) => {


  return (
    <>
      <li>
        <label className={todo.complete ? "complete" : undefined}>
          <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
          {todo.text}
        </label>
      </li>

    </>
  );
};

export default ToDoItem;
