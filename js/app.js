// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {

}

let index = 1;
//add methods to display prototype
//Implementing the add function
Display.prototype.add = function (book) {
    let tableBody = document.getElementById("tableBody");
    let addString = `
                <tr>
                    <th scope="row">${index++}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
    `
    tableBody.innerHTML += addString;
}

//Implementing the validate function
Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length < 5){
        return false;
    }
    else{
        return true;
    }
}

//Implementing the show function which will give alert to the user
Display.prototype.show = function(type, displayMessage){
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

    `
    setTimeout(function(){
        message.innerHTML = '';
    },2000)
}

//Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


//add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("You have submitted the book");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;
    let type;

    let fiction = document.getElementById("fiction");
    let adventure = document.getElementById("adventure");
    let computerProgramming = document.getElementById("computerProgramming");

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }
    else if (computerProgramming.checked) {
        type = computerProgramming.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added");
    }

    else{
        //display error message
        display.show("danger","There is some ERROR in adding your book");
    }

    e.preventDefault();

}

// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view