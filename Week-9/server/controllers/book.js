let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find()
        .then(bookList => {
            res.json(bookList);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
}

module.exports.displayAddPage = (req, res, next) => {
    /*
    res.render('book/add', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''});
    */
   
    res.json({success: true, msg: 'Succesfully Displayed Add Page'});
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            //res.redirect('/book-list');

            res.json({success: true, msg: 'Successfully Added New Book'});
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            /*
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit, 
            displayName: req.user ? req.user.displayName : ''});
            */

            res.json({success: true, msg: 'Successfully Displayed Book to Edit', book: bookToEdit});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            //res.redirect('/book-list');

            res.json({success: true, msg: 'Successfully Edited Book', book: updatedBook});
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             //res.redirect('/book-list');

             res.json({success: true, msg: 'Successfully Deleted Book'});
        }
    });
}