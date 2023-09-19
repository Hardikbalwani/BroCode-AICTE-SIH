const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
            unique: true,
        },
        genre: {
            type: String,
            required: true,
        },


    },

);


const Book = mongoose.model("Book", bookSchema);
module.exports = Book;