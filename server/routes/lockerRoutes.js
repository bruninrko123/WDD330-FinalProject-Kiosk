const express = require('express');
const router = express.Router();
const Locker = require('../models/lockerModel');


router.get('/', async (req, res) => {
    const lockers = await Locker.find();
    res.json(lockers);
});


module.exports = router;