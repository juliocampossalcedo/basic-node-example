import Book from "../common/models/Book.js"

const getBooks = async (req, res) => {
    const books = await Book.find().populate('authors');
    res.json(books); 
}

const createBooks = async (req, res) => {
    try {
        const book = new Book(req.body);
        const newBook = await book.save();
    } catch (error) {
        console.log(error);
    }
    res.json({ msg: "Creando user"});
}

const avgPage = async (req, res) => {
    const book = await Book.findById(req.params.idBook).select('-__v -createdAt -updatedAt -authors -title')
    .then( bookData => {
        bookData._doc.avg = (bookData.pages / bookData.chapters).toFixed(2);
        delete bookData._doc.chapters;
        delete bookData._doc.pages;
        return bookData;
    });

    res.json(book); 
}

export {getBooks, createBooks, avgPage};