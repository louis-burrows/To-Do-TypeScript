import * as React from 'react';
import "./ToDoItem.css"

interface ToDoItemProps {
  todo: Todo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo }) => {


  return (
    <>
      <li>
        <label className={todo.complete ? "complete" : undefined}>
          <input type="checkbox" checked={todo.complete}/>
          {todo.text}
        </label>
      </li>

    </>
  );
};

export default ToDoItem;
