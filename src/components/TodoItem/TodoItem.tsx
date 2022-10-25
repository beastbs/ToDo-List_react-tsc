import { useTodo } from "../TodoContext/TodoContext";
import DeleteIcon from "@mui/icons-material/Delete";

import "./TodoItem.scss";
import TodoEmpty from "../TodoEmpty/TodoEmpty";

const TodoItem = () => {
  const { todos, onDeleteTodo, onToggleTodo } = useTodo();

  const render = todos.map((item) => {
    const { title, id, completed } = item;

    const cls = ["todo__list-item"];
    if (completed) {
      cls.push("completed");
    }

    return (
      <li className={cls.join(" ")} key={id}>
        <label>
          <div>
            <input
              className="input"
              type="checkbox"
              defaultChecked={completed}
              onChange={() => onToggleTodo(id)}
            />
            <span className="active">{title}</span>
          </div>
          <DeleteIcon className="DeleteIcon" onClick={() => onDeleteTodo(id)} />
        </label>
      </li>
    );
  });

  return <div>{render.length > 0 ? render : <TodoEmpty />}</div>;
};

export default TodoItem;
