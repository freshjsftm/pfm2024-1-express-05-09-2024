const users = [];
let count = 1;

module.exports.create = (req, res) => {
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

module.exports.update = (req, res) => {
  try {
    console.log(req.params.userId);     
    res.send('update');
  } catch (error) {
    res.status(404).send(error.message);
  }
};

module.exports.delete = (req, res) => {
  try {
    res.send('delete');
  } catch (error) {
    res.status(404).send(error.message);
  }
};
