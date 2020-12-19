const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const players = require('../models/player')

router.post('/createPlayer', players)

module.exports = router