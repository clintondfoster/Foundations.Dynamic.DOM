//Maintain an array of objects of added bookmarks
const inputContainer = document.querySelector("#input-container");
const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove");
const linkInput = document.querySelector("#link");
const nameInput = document.querySelector("#name");
const list = document.querySelector("#list");

const bookmarkList = [];
const currentBookmark = {};

const addBookmark = (bookmark) => {
    const addName = nameInput.value;
    const addLink = linkInput.value;

    bookmarkList.push(bookmark)
}
//add render function



//Eventlister to add & remove button, render after each click


addButton.addEventListener("click", () => {
    addBookmark(bookmark)});

// const newObject = () => { 
// }



//Re-render entire list anytime bookmark is added or removed
const renderList = () => {
    const listArray = document.createElement('ul');
    const listItem = document.createElement('li');
    listArray.appendChild(listItem);

    linkInput.textContent = linkInput.value
}


//Use map method to map the bookmark array to DOM elements

