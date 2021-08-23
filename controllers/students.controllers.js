const Users = require('../models/users.models');

async function createUser(body) {
    // const user = await getUsers(body.name);
    const newuser = new Users(body);
    return newuser;
    user.save().then((result) => {
        console.log(result);
        return result;
    }).catch(e=>{
        console.log(e);
        throw new Error(e);
    })
}

async function getUsers() {
   const users = await Users.find();
   return users;
}

async function updateUser(id, updateData) {
    return await Users.findByIdAndUpdate(id, updateData, {upsert: true });
}

async function deleteUser() {
    const deletedStudent = await Users.findByIdAndDelete(id);
    return deletedStudent;
}

async function getUserByQuery(query){
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