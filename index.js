//Maintain an array of objects of added bookmarks
const inputContainer = document.querySelector("#input-container");
const addButton = document.querySelector("#add");
const removeButton = document.querySelector("#remove");
const linkInput = document.querySelector("#link");
const nameInput = document.querySelector("#name");
const list = document.querySelector("#list");

const bookmarkList = [];
const currentBookmark = {};

const addBookmark = () => {
  const addName = nameInput.value;
  const addLink = linkInput.value;
  const bookmark = {
    bkmkName: addName,
    link: addLink,
  };

  bookmarkList.push(bookmark);
  console.log("SINGLE BOOKMARK: ", bookmark);

  renderBookmarkList();

  console.log("BOOMARK LIST: ", bookmarkList);
};

//add render function

//render one bookmark object
const renderSingleBookmark = (singleBookmark) => {
  const bkMkLi = document.createElement("li");
  bkMkLi.innerText = singleBookmark.link;

  return bkMkLi;
};

//THEN render objects in the array into an UL
const renderBookmarkList = () => {
  const bkMkUl = document.createElement("ul");
  const elements = bookmarkList.map((bookmark) =>
    renderSingleBookmark(bookmark)
  );
  list.replaceChildren(...elements);
  return elements;
};

//Eventlister to add & remove button, render after each click

addButton.addEventListener("click", () => {
  addBookmark();
});

//Re-render entire list anytime bookmark is added or removed

//Use map method to map the bookmark array to DOM elements
