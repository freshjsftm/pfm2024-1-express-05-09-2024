const express = require('express');
const validate = require('./middlewares/validate.mw');

const app = express();
const PORT = 3000;
const users = [];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi');
});

let count = 1;
const create = (req, res) => {
  try {
    const user = req.body;
    user.id = count++;
    delete user.password;
    user.createdAt = new Date();
    users.push(user);
    console.log(users);
    res.status(201).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const update = (req, res) => {
  try {
    res.end()
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const deleteUser = (req, res) => {
  try {
    res.end()
  } catch (error) {
    res.status(404).send(error.message);
  }
};

app.post('/users', validate, create);
app.put('/users/1',  validate, update);
app.delete('/users/1', deleteUser);

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
});
