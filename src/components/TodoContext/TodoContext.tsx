import { createContext, useContext, useEffect, useState } from "react";
import { ITodos } from "../../models/models";
import { ITodosProps } from "../../models/models";

import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext<null | ITodosProps>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error("Context is null");
  }
  return context;
};

const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [todos, setTodos] = useState<ITodos[]>([]);

  useEffect(() => {
    const storage = localStorage.getItem("todos") || [];
    if (typeof storage === "string") {
      setTodos(JSON.parse(storage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onAddTodo = (title: string) => {
    const newTodo = {
      title,
      id: uuidv4().slice(0, 8),
      completed: false,
    };

    if (title === "") {
      return;
    }

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const onDeleteTodo = (id: number | string) => {
    setTodos((prevState): ITodos[] =>
      prevState.filter((item) => item.id !== id)
    );
  };

  const onToggleTodo = (id: number | string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const dataForTodos = {
    todos,
    onAddTodo,
    onDeleteTodo,
    setTodos,
    onToggleTodo,
  };

  return (
    <TodoContext.Provider value={dataForTodos}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
