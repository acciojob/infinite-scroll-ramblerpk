const list = document.getElementById('list');
let count = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Add scroll event listener for infinite scroll
list.addEventListener('scroll', function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // Reached the bottom, add 2 more items
    addItems(2);
  }
});
