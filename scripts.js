let bookContainer=document.getElementById('book-container');
let addBookBtn = document.getElementById('add-book-btn');
addBookBtn.addEventListener('click',addBook);
let myLibrary = [];

getLib(); //populate myLibrary from localstorage
displayLibrary(); //first time calling to display the booklist


function Book(title='unspecified',author='unspecified'){
    this.title = title;
    this.author = author;
}

function addBook(){
    let title = prompt('Enter the title of the book: ');
    let author = prompt('Enter the name of the author: ');
    let LibObj = new Book(title,author);
    myLibrary.push(LibObj);
    setLib(); //store myLibrary every time an element is added 
    displayLibrary();
}

function displayLibrary(){
    clearBookContainer();
    for(let i=0; i<myLibrary.length; i++){
        let book = document.createElement('div');

        let bookTitle = document.createElement('p');
        bookTitle.textContent = 'Title: '+myLibrary[i]['title'];
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = 'Author: '+myLibrary[i]['author'];
        

        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        //add an <hr> tag
        book.appendChild(document.createElement('hr'));
        
        bookContainer.appendChild(book);
    }
}

function clearBookContainer(){
    while(bookContainer.firstElementChild){
        bookContainer.removeChild(bookContainer.firstElementChild);
    }
}

function setLib(){
    //stores the mylibrary array to localstorage
    for(let i=0;i<myLibrary.length; i++){
        localStorage.setItem(i,JSON.stringify(myLibrary[i]));
    }
}

function getLib(){
    //populates the mulibrary array from localstorage
    for(let i=0;i<localStorage.length; i++){
        let key=localStorage.key(i);
        //stored objects are json strings and need to be parsed in order to be converted to objects
        myLibrary[i]=JSON.parse(localStorage.getItem(key));
    }
}