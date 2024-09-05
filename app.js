const express = require('express');
const validate = require('./middlewares/validate.mw');
const UserController = require('./controllers/user.controller');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => { res.send('hi');});
app.post('/users', validate, UserController.create);
app.put('/users/:userId', validate, UserController.update);
app.delete('/users/:userId', UserController.delete);

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
});
