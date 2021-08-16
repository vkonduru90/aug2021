const express = require('express');
const router = express.Router();

router.use('/students', require('./students.routes'));
router.use('/users', require('./users.routes'));

module.exports = router;