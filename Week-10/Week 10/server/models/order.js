let mongoose = require('mongoose');

// create order model class
let Order = mongoose.Schema({
    name: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    country: String,
    shipped: Boolean,
    cart:
    {
        lines:
        [{book:
            {
                name: String,
                author: String,
                published: String,
                description: String,
                price: Number
            },
            quantity: Number
        }],
        itemCount: Number,
        cartPrice: Number
    }
},
{
    collection: 'orders'
});

module.exports = mongoose.model('Order', Order);