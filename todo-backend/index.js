const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Build a Todo App', completed: false },
  { id: 3, title: 'Deploy the App', completed: false },
];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.patch('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json(todos.find(todo => todo.id === id));
});

app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});