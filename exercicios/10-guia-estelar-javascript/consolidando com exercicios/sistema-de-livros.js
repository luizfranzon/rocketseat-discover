//Sistema de livros

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionárioa",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamenrte eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length;

console.log("Total de Categorias:", totalCategories);
for (let category of booksByCategory) {
    console.log(
        "Total de livros na categoria",
        category.category + ":",
        category.books.length
    );
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let books of category.books) {
            if (authors.indexOf(books.author) == -1) {
                authors.push(books.author);
            }
        }
    }
    console.log("Total de autores:", authors.length);
}

countAuthors();

function booksOfAugusto() {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === "Augusto Cury") {
                books.push(book.title);
            }
        }
    }
    console.log("Livros do autor:", books);
}

booksOfAugusto();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title);
            }
        }
    }
    console.log("Livros do autor", author + ": " + books.join(", "));
}

booksOfAuthor("Augusto Cury");
