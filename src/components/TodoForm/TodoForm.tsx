import { useState } from "react";
import { useTodo } from "../TodoContext/TodoContext";
import "./TodoForm.scss";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { onAddTodo } = useTodo();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
  };

  const onInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="todo__form" onSubmit={onSubmitForm}>
      <input
        value={inputValue}
        onChange={onInputValue}
        className="todo__form-input"
        type="text"
      />
      <button className="todo__form-btn">Add todo</button>
    </form>
  );
};

export default TodoForm;
