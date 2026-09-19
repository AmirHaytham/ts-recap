const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
app.use(express.json());

// Load OpenAPI spec
const openapi = YAML.load(path.join(__dirname, 'openapi.yaml'));

// Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapi, { explorer: true }));

let tasks = [
  { id: '1', title: 'Finish the Figma wireframe', completed: true },
  { id: '2', title: 'Write the OpenAPI spec', completed: false },
  { id: '3', title: 'Try it out in Swagger UI', completed: false },
];
let nextId = 4;

app.get('/tasks', (req, res) => {
  const { completed } = req.query;
  if (completed === undefined) return res.json(tasks);
  res.json(tasks.filter((t) => t.completed === (completed === 'true')));
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ message: 'title is required' });
  const task = { id: String(nextId++), title, completed };
  tasks.push(task);
  res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const before = tasks.length;
  tasks = tasks.filter((t) => t.id !== req.params.id);
  if (tasks.length === before) return res.status(404).json({ message: 'Task not found' });
  res.status(204).send();
});

// the POST /login from the testing slide, hardcoded so there is something to try
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'email and password are required' });
  }
  if (email !== 'student@giu-uni.de' || password !== 'sp1') {
    return res.status(401).json({ message: 'Wrong email or password' });
  }
  res.json({ token: 'fake-token-for-the-demo', email });
});

app.get('/', (req, res) => res.redirect('/api-docs'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
  console.log(`Docs on       http://localhost:${PORT}/api-docs`);
});
