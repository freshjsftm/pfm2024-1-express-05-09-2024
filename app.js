const express = require('express');
const yup = require('yup');
// create application - server
const app = express();
const PORT = 3000;

const users = [];

// ROUTING
app.get('/', (req, res) => {
  res.send('hi');
});

// 1 parse
const parse = express.json();
// 2 validation
const validate = async (req, res, next) => {
  const validationSchemaUser = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().trim().required(),
    isMale: yup.boolean(),
  });
  try {
    req.body = await validationSchemaUser.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// 3 save user// 4 prepare user// 5 send user
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

app.post('/users', parse, validate, create);
// app.put('/users/1', parse, validate, create)
// app.delete()

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
});
