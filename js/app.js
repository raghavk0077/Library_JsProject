// Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display(){

}

let index = 1;
//add methods to display prototype
Display.prototype.add = function(book){
    let tableBody =document.getElementById("tableBody");
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

Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}


//add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("You have submitted the book");

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("authorName").value;
    let type;

    let fiction = document.getElementById("fiction");
    let adventure = document.getElementById("adventure");
    let computerProgramming = document.getElementById("computerProgramming");

    if(fiction.checked){
        type = fiction.value;
    }
    else if(adventure.checked){
        type = adventure.value;
    }
    else if(computerProgramming.checked){
        type = computerProgramming.value;
    }
    
    let book = new Book(name, author, type);
    // console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();

}