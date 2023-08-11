import Author from "../common/models/Author.js"

const getAuthors = async (req, res) => {
    const author = await Author.find().populate('books');
    res.json(author); 
}

const createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body);
        const newAuthor = await author.save();

    } catch (error) {
        console.log(error);
    }
    
    res.json({ msg: "Creando author"});
}

export {getAuthors, createAuthor};