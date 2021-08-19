const express = require('express');
const router = express.Router();

router.use('/secure/students', require('./students.routes'));
router.use('/secure/users', require('./users.routes'));
router.use('/users', require('./public.routes'));

module.exports = router;