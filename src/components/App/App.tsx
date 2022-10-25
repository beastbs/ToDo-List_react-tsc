import TodoHeader from "../TodoHeader/TodoHeader";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import TodoProvider from "../TodoContext/TodoContext";

import "./App.scss";

function App() {

  return (
    <TodoProvider>
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
    </TodoProvider>
  );
}

export default App;
