const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const tests = require('../models/test')

router.get('/', (req, res, next) => {
    tests.find()
    .then(a => {
      res.status(200).json({ topScores: '5' })
    })
});
module.exports = router