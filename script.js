//your code here!
function addInitialItems() {
    const list = document.getElementById('list');
    for (let i = 1; i <= 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Item ' + i;
        list.appendChild(listItem);
    }
}

// Step 2: Check if user has scrolled to the bottom
function checkScroll() {
    const list = document.getElementById('list');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addMoreItems();
    }
}

// Step 3: Add more list items when scrolled to the bottom
function addMoreItems() {
    const list = document.getElementById('list');
    for (let i = 11; i <= 12; i++) { // Adjust the range based on existing items
        const listItem = document.createElement('li');
        listItem.textContent = 'Item ' + i;
        list.appendChild(listItem);
    }
}

// Event listeners
window.onload = addInitialItems;
window.addEventListener('scroll', checkScroll);
