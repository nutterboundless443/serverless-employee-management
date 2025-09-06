const express = require('express');
const app = express();

app.use(express.json());

// Example route
app.get('/employees', (req, res) => {
  res.send('Fetching employee information');
});

// New route for adding an employee
app.post('/employees', (req, res) => {
  res.send('Adding new employee');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});