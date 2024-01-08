const Book = require("./model");
const { get } = require("./routes");

const addBook = async  (req, res) => {
    try {
        const book = await Book.create({
            title: req.body.title,
            author: req.body.athor,
            genre: req.body.genre,
        });

        res.status(201).json({message: "book created", book: book})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};



const getBooks = async  (req, res) => {
    try {
        const books = await Book.findAll();

        res.status(201).json({message: "books found", books: books})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};


const getBook = async  (req, res) => {
    try {
        const book = await Book.findOne({
            where: {title: req.params.title},
        });
        res.status(201).json({message: "book found", book: book})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};



const putBook = async  (req, res) => {
    try {
        const book = await Book.update({
          genre: req.body.genre,
        },
        { where: {
            title: req.body.title
        }
        }
        );

        res.status(201).json({message: "book updated", book: book})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};


const deleteOneBookByTitle = async  (req, res) => {
    try {
        const pretendBook = {
            title: "pretend book",
            isDeleted: true,
        };

        const deletedbook = await Book.destroy({
            where: {
            title: req.body.title,
            },
        });

        res.status(201).json({message: "book deleted", deletedbook: deletedbook})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};


const deleteAllBooks = async  (req, res) => {
    try {
        const books = await Book.destroy({
            truncate: true,
        });

        res.status(201).json({message: "all books deleted", books: books})
    
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

module.exports = {
    addBook: addBook,
    getBooks: getBooks,
    getBook: getBook,
    putBook: putBook,
    deleteOneBookByTitle: deleteOneBookByTitle,
    deleteAllBooks: deleteAllBooks,
};