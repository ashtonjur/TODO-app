import React from 'react';

export interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, toggleTodo }) => (
  <li>
    <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</span>
    <button onClick={() => toggleTodo(id)}>
      {completed ? 'Undo' : 'Complete'}
    </button>
  </li>
);

export default TodoItem;