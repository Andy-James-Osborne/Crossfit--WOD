function randomizeItem(event) {
    const items = ["apple", "banana", "cherry"]; // Your items array
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
  
    // Update the HTML with the selected item
    document.getElementById("item-container").innerHTML = randomItem;
  }
  
  const randomizeButton = document.getElementById("randomize-button");
  randomizeButton.addEventListener("click", randomizeItem);
  