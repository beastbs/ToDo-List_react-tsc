import "./TodoForm.scss";

const TodoForm = () => {
  return (
    <form className="todo__form">
      <input className="todo__form-input" type="text" />
      <button className="todo__form-btn">Add todo</button>
    </form>
  );
};

export default TodoForm;
