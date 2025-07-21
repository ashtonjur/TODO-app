import React from 'react';

interface TodoItemProps {
    id: number;
    title: string;
    completed: boolean;
    toggleCompletion: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, toggleCompletion }) => {
    return (
        <div>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => toggleCompletion(id)} 
            />
            <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                {title}
            </span>
        </div>
    );
};

export default TodoItem;