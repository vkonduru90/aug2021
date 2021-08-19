const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
  console.log('In Allllll');
  return res.status(200).json({message: 'From All'});
});

module.exports = router;