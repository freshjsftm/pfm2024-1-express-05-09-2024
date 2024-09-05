const express = require('express');
// create application - server
const app = express();
const PORT = 3000;

// ROUTING
app.get('/')
// app.post()
// app.put()
// app.delete()

app.listen(PORT, ()=>{
  console.log('app started at port '+PORT);
  
});
