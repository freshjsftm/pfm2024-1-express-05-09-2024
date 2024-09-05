const express = require('express');
// create application - server
const app = express();
const PORT = 3000;

// ROUTING
app.get(
  '/',
  (req, res, next) => {
    req.test = 10;
    console.log('1');
    next();
  },
  (req, res, next) => {
    req.test +=5;
    console.log('2');
    next();
  },
  (req, res) => {
    res.send('hi, req.test = '+req.test);
  }
);

// app.get('*', (req, res) => {
//   res.send(`<h1>404 ! method - ${req.method}, url - ${req.path}</h1>`);
// });
// app.post()
// app.put()
// app.delete()

app.listen(PORT, () => {
  console.log('app started at port ' + PORT);
});
