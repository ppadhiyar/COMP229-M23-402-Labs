var express = require('express');
var router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Express' });
};

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
};

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products' });
};

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services' });
};

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact Us' });
};