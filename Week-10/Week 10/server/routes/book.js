let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Book List page - READ Operation */
router.get('/', bookController.displayBookList);

/* GET Route for displaying the Add page - CREATE Operation */
//router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', passport.authenticate('jwt', {session: false}), bookController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
//router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), bookController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), bookController.performDelete);

module.exports = router;