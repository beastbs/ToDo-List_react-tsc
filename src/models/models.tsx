export interface ITodos {
  title: string;
  id: number | string;
  completed: boolean;
}

export interface ITodosProps {
  todos: ITodos[];
  onAddTodo: (title: string) => void;
  onDeleteTodo: (id: number | string) => void;
  onToggleTodo: (id: number | string) => void;
}
