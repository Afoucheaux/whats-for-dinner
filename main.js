
var cookPotImg = document.querySelector('#svg-cookpot');
var cookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector(".clear");
var dishState = document.querySelector("#dish-state");
var mainState = document.querySelector("#main-state");
var wholeMealStatement = document.querySelector("#change-meal");
var dishStatement = document.querySelector("#change-dish");
var addRecipe = document.querySelector(".add-recipe-button");
var footer = document.querySelector("footer");
var recipeTypeToAdd = document.querySelector("select");
var addNewButton = document.querySelector("#add-new-button");
var yourRecipe = document.querySelector("#your-recipe");
var yourPick = false;

cookButton.addEventListener("click", changeToDish);
clearButton.addEventListener("click", reset);
addRecipe.addEventListener("click", openAddRecipe)
addNewButton.addEventListener("click", saveRecipe)

function openAddRecipe(){
  unhide(footer);
}

function unhide(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function saveRecipe() {
  event.preventDefault();
  if (recipeTypeToAdd.value === "type") {
    alert("Please pick a type!");
    return
  } else if (recipeTypeToAdd.value === "your-side") {
    sidesList.push(yourRecipe.value);
  } else if (recipeTypeToAdd.value === "your-main") {
    mainDishList.push(yourRecipe.value);
  } else {
    dessertList.push(yourRecipe.value);
  }
  unhide(clearButton);
  unhide(dishState);
  hide(cookPotImg);
  dishStatement.innerHTML = `<p id="change-dish">${yourRecipe.value}!</p>`;
}

function checkRadioButtons() {
  var choice = document.querySelectorAll("input");
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked === true) {
      yourPick = choice[i].value;
    }
  }
}

function randomDish() {
  if (yourPick === "side") {
    dishStatement.innerHTML = `<p id="change-dish">${sidesList[getRandomIndex(sidesList)]}!</p>`;
  } else if (yourPick === "main") {
    dishStatement.innerHTML = `<p id="change-dish">${mainDishList[getRandomIndex(mainDishList)]}!</p>`;
  } else {
    dishStatement.innerHTML = `<p id="change-dish">${dessertList[getRandomIndex(dessertList)]}!</p>`;
  }
}

function randomEntireMeal() {
  wholeMealStatement.innerHTML = `<p id="change-meal">${mainDishList[getRandomIndex(mainDishList)]}
  with a side of ${sidesList[getRandomIndex(sidesList)]} and ${dessertList[getRandomIndex(dessertList)]} for dessert!<p>`
}

function changeToDish() {
  event.preventDefault();
  checkRadioButtons();
  if (yourPick === false) {
    errorMessage();
  } else if (yourPick === "entire") {
    hide(cookPotImg);
    unhide(mainState);
    randomEntireMeal();
  } else {
    hide(cookPotImg);
    unhide(dishState);
    randomDish();
  }
  hide(cookButton);
  unhide(clearButton);
}

function errorMessage() {
  hide(cookPotImg);
  unhide(dishState);
  dishStatement.innerHTML = `<p id="change-dish">Opps, Please make a selection!</p>`;
}

function reset() {
  location.reload();
}
