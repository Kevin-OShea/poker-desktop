const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const table = require('../models/table')

router.get('/getAll', (req, res, next) => {
    Table.find()
    .then(a => {
      res.status(200).json({ tables: a })
    })
});

router.post('/createTable', (req, res, next) => {
    Table.create()
    .then(table => {
      res.status(201).json({ table: table.toObject() })
    })
});


// router.post('/createTable', (req, res, next) => {
//     table.create()
//     .then(a => {
//       res.status(200).json({ table: a })
//     })
// });


// router.post('/createTable', (req, res, next) => {
//     table.create()
//     .then(a => {
//       res.status(200).json({ table: a })
//     })
// });



module.exports = router