import DeleteIcon from "@mui/icons-material/Delete";

import "./TodoItem.scss";

const TodoItem = () => {
  return (
    <>
      <li className="todo__list-item">
        <label>
          <input type="checkbox" />
          <span>Run at the morning</span>
          <DeleteIcon className="DeleteIcon" />
        </label>
      </li>
      <li className="todo__list-item">
        <label>
          <input type="checkbox" />
          <span>Read book</span>
          <DeleteIcon className="DeleteIcon" />
        </label>
      </li>
      <li className="todo__list-item">
        <label>
          <input className="todo__list-checkbox" type="checkbox" />
          <span>To finish todo app</span>
          <DeleteIcon className="DeleteIcon" />
        </label>
      </li>
      <li className="todo__list-item">
        <label>
          <input type="checkbox" />
          <span>Boxing</span>
          <DeleteIcon className="DeleteIcon" />
        </label>
      </li>
      <li className="todo__list-item">
        <label>
          <input type="checkbox" />
          <span>Learn JS</span>
          <DeleteIcon className="DeleteIcon" />
        </label>
      </li>
    </>
  );
};

export default TodoItem;
