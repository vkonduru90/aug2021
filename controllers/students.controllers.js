const Users = require('../models/users.model');

async function createUser(body) {
  // const user = await getUsers(body.uname);
  const newuser = new Users(body);
  return newuser
    .save()
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
}

async function getUsers() {
  const users = await Users.find();
  return users;
};

async function updateUser(id, updateData) {
    return await Users.findByIdAndUpdate(id, updateData, {upsert: true});
};

async function deleteUser(id) {
  return await Users.findByIdAndDelete(id);
};

async function getUserByQuery(query) {
  const users = await Users.find(query);
  return users;
}


module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByQuery
};
