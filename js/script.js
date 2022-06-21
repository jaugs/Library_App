
let myLibrary = [];
let readStatus = 'read';

const shelf = document.querySelector('.shelf');
const Checkbox = document.querySelector('#read');
let info = document.querySelector('.sidebar');

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

function createBook () {
  Checkbox.addEventListener('change', () => {
    if(Checkbox.checked) {
      readStatus= "read"
    } else {
      readStatus= "not read"
    }});
  let newBook = new Book (document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, readStatus)
  myLibrary.push(newBook);
  console.log(myLibrary);
  console.log(newBook);
  addBook(newBook);
}

function addBook (newBook) {
      let bookCover = document.createElement('div');
      bookCover.setAttribute('class', 'card');
      bookCover.style.backgroundColor = randomColor();
      shelf.appendChild(bookCover);
      bookCover.innerText = newBook.title;
      let newBtn = document.createElement("button");
      newBtn.innerHTML = "View Options";
      newBtn.setAttribute('class', 'options');
      newBtn.onclick = function() {
        clearOptions();
        let infoCard = document.createElement('div');
        infoCard.innerText = "Book Values"
        infoCard.setAttribute('id', 'sidebarCard');
        info.appendChild(infoCard);
        let valueList = document.createElement('ul');
        valueList.setAttribute('id','newList');
        infoCard.appendChild(valueList);
        for (let key in newBook) {
          let li = document.createElement('li');
          li.innerHTML = newBook[key];
          valueList.appendChild(li);
        }
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Book";
        deleteButton.setAttribute('class', 'delete');
        infoCard.appendChild(deleteButton);
        deleteButton.onclick = function() {
          bookCover.remove();
        }
       };
      bookCover.appendChild(newBtn);
    }
      
function randomColor() {
    let color = ["darkred", "goldenrod", "salmon", "teal", "plum", "darkblue", "darkgreen", "indigo", "darkgray", "orange", "purple", "darkcyan"] 
    let colorRandom = color[Math.floor(Math.random() * color.length)];
    return colorRandom}

function clearOptions () {
  let element = document.getElementById('sidebarCard');
 if (element) {
  element.remove();
} else return;
}