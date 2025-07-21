import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

const Home: React.FC = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Build a Todo App', completed: false },
        { id: 3, title: 'Deploy the App', completed: false },
    ]);

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id} 
                        title={todo.title} 
                        completed={todo.completed} 
                        toggleTodo={toggleTodo} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default Home;