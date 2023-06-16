let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Game Model
let Game = require('../models/game');

let gameController = require('../controllers/game')

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Game List page - READ Operation
router.get('/', gameController.displayGameList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', requireAuth, gameController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', requireAuth, gameController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', requireAuth, gameController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', requireAuth, gameController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', requireAuth, gameController.performDelete);

module.exports = router;