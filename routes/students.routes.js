const express = require('express');
const router = express.Router();
const studentController = require('../controllers/students.controllers');
router.post('/', async (req, res) => {
  const body = req.body;
  if (!body.lastName) {
    return res.status(400).json({ message: 'lastName is required.' });
  }
  try {
    const result = await studentController.createUser(body);
    return res.status(200).json({ students: result });
  } catch (e) {
    return res.status(400).json({ error: e });
  }
});

router.get('/', async (req, res) => {
  const users = await studentController.getUsers();
  return res.status(200).json({ students: users });
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedUser = await studentController.updateUser(id, body);
  return res.status(200).json({ student: updatedUser });
});

router.delete('/', async (req, res) => {
  const id = req.query.id;
  const deletedResult = await studentController.deleteUser(id);
  return res.status(200).json({ deletedResult });
});

module.exports = router;
