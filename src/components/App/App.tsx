import TodoHeader from "../TodoHeader/TodoHeader";
import TodoForm from "../TodoForm/TodoForm";

import "./App.scss";
import TodoList from "../TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <div className="container">
        <TodoHeader />
        <div className="todo">
          <TodoForm />
          <div className="todo__devider"></div>
          <div className="todo__list">
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
