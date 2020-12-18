const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const test = require('../models/test')

router.get('/TopFive', (req, res, next) => {
    AppState.find()
    .then(scores => {
      var topFive = scores.sort((a,b) => b.highScore-a.highScore).slice(0,5);
      res.status(200).json({ topScores: topFive })
    })
});

module.exports = router