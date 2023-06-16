let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Game = require('../models/game');

let gameController = require('../controllers/game')

// Get Route for the Game List page - READ Operation
router.get('/', gameController.displayGameList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', gameController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', gameController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', gameController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', gameController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', gameController.performDelete);

module.exports = router;