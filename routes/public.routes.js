const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students.controllers');
const {createJWT, validateJWT} = require('../utils/jwt');

router.post('/login', async (req, res) => {
  const body = req.body;
  const users = await studentController.getUserByQuery(body);
  if (users.length == 0) {
    return res.status(400).json({ message: 'Unable to find the User. Try to Register...' });
  }
  const token = createJWT({id: users[0].id, uname: users[0].uname});
  return res.status(200).json({ token });
});

module.exports = router;
