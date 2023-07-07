let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let orderController = require('../controllers/order');

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

/* GET Order List page -- READ Operation */
router.get('/', orderController.displayOrderList);

/* POST Route for processing the Add Order Page */
router.post('/add', orderController.processAddPage);

module.exports = router;