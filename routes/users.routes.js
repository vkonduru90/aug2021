const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
    res.status(200).json({message: 'For All'});
    console.log('In Allll');
    next();
});

module.exports = router;


