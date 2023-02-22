const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addIngredientsEl = document.querySelector("#ingredients");

const addItemsToList = (array) => {
  array.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = item;
    itemEl.classList.add("item");
    addIngredientsEl.append(itemEl);
    // console.log(itemEl);
  });
};

addItemsToList(ingredients);
