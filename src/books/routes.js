const { Router } = require ("express");
const bookRouter = Router();

const{ addBook, getBooks, getBook, putBook, deleteOneBookByTitle, deleteAllBooks} = require("./controllers");

bookRouter.post("/books", addBook);

bookRouter.get("/books", getBooks);

bookRouter.get("/books/:title", getBook);

bookRouter.put("/books", putBook);

bookRouter.delete("/books/deleteAll", deleteAllBooks);

bookRouter.delete("/books/deleteOne", deleteOneBookByTitle);

module.exports = bookRouter;