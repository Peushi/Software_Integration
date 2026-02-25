const express = require('express');
const config = require('./config');
const User = require('./userModel');

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {
  const user = await User.create(req.body.name, req.body.email);
  res.status(201).json(user);
});

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = await User.update(id, name, email);
  if (!updatedUser) return res.status(404).send('User not found');
  res.json(updatedUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${config.env} mode on port ${PORT}`);
});