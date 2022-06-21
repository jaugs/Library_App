
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
 // return newBook;
  addBook(newBook);
}

function addBook (newBook) {
      let bookCover = document.createElement('div');
     // let readCheck = document.createElement()

    

      bookCover.setAttribute('class', 'card');
      shelf.appendChild(bookCover);
      bookCover.textContent = newBook.title;
      let newBtn = document.createElement("button");
      newBtn.innerHTML = "View Options";
      newBtn.setAttribute('class', 'options');
      newBtn.onclick = function() {
        let infoCard = document.createElement('div');
        infoCard.setAttribute('class', 'sidebarCard');
        infoCard.innerText = newBook.title;
        infoCard.innerText = newBook.author;
        infoCard.innerText = newBook.pages;
        //infoCard.textContent = newBook.read;
        info.appendChild(infoCard);
       };
      bookCover.appendChild(newBtn);

    }








// const container = document.querySelector('.pad');
// let colorImput = document.querySelector('.colorImput');
// let clickImput = document.querySelector('.clickImput');
// const appSwitch = document.querySelector('.switch_Box')
// container.style.backgroundColor = colorImput.value

// function choseColor() {
//     gridElements.forEach(item => {
//         item.addEventListener("mouseover", function (event) {
//             event.target.style.backgroundColor = colorImput.value;})})
// }

// function selectAll() {
//     return gridElements = document.querySelectorAll(".square");
// }

// function initialize(squareSize) 
// {
//     for (let i = 0; i < squareSize * squareSize; i+=1) 
//         {
//         const box = document.createElement('div');
//         box.setAttribute('class', 'square')
//         container.appendChild(box);
//         selectAll(); 
//         }
//     container.style.gridTemplateColumns = `repeat(${squareSize}, 1fr)`;
// }

// function changeSize() {
//     clearGrid();
//     let newGrid = document.getElementById("grid_Size").value;
//     if (newGrid > 100) {
//         alert("Error! Grid cannot have over 100 elements");
//         return;
//     } else {
//     initialize(newGrid);
//     hover();
//     clicker();
// }}

// function clearGrid() {
//     let remove = document.querySelector('.pad');
//     while (remove.firstChild) {
//         remove.removeChild(remove.firstChild);
//     }
// }

// appSwitch.addEventListener('change', () => {
//     changeStates();
// })

// function changeStates() {
//     if (appSwitch.checked)
//     {rainbowColors()
//     } else { choseColor()}
// }

// initialize(16);

// function hover() {
//     gridElements.forEach(item => {
//     item.addEventListener("mouseover", function (event) {
//         event.target.style.backgroundColor = colorImput.value;})})
//     }
// function clicker() {
//     gridElements.forEach(item => {
//     item.addEventListener("click", function (event) {
//             event.target.style.backgroundColor = clickImput.value;})})
//         }

// function rainbowColors() {
//     gridElements.forEach(item => {
//         item.addEventListener("mouseover", function (event) {
//             event.target.style.backgroundColor = randomColor();})})
//         }

// function randomColor() {
//     let color = ["blue", "red", "yellow", "salmon", "teal", "plum", "darkblue", "green", "indigo", "cyan", "orange", "purple", "crimson"] 
//     let colorRandom = color[Math.floor(Math.random() * color.length)];
//     return colorRandom
// }


// hover();
// clicker();










