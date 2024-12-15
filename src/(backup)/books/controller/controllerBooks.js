const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
    { id: 3, title: 'Book 4', author: 'Author 4' },
]

const findAllBooks = (req, res) => {
    const data = books;
    res.json({
        status: 200,
        data: data
    })
}

const findByid = (req, res) => {
    const {id} = req.params
    
    let book

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === Number(id)) {
            book = books[i]
        }
    }

    res.json({
        status: book? 200 : 404,
        data: book? book : "data tidak ada"
    })
}

const createBook = (req, res) => {
    
    const { title, author } = req.body

    const lastItemBookId = books[books.length - 1].id
    const newIdBook = lastItemBookId + 1
    
    const newBook = {  id: newIdBook, title: title, author: author }
    books.push(newBook)

    res.json({
        status: 201,
        data: newBook
    })
}

module.exports = {findAllBooks, findByid, createBook}