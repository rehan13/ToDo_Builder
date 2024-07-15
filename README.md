# Item Lister

This project is a simple web-based application for managing a to-do list. Users can add, delete, and search through their list of items. The application utilizes HTML, CSS (with Bootstrap), and JavaScript for functionality.

## Features

- **Add Items**: Users can add new items to the list.
- **Delete Items**: Users can remove items from the list.
- **Search Items**: Users can filter items in the list based on a search term.

## Technologies Used

- **HTML**: For the basic structure of the application.
- **CSS**: For styling the application, including Bootstrap for responsive design.
- **JavaScript**: For handling the interactive functionality of the application.

## Getting Started

### Prerequisites

To run this project locally, you need a modern web browser.

### Installation

1. Clone the repository or download the project files.
2. Open `index.html` in your web browser.

### Usage

1. **Add Items**: Enter an item in the input field under "Add Items" and click the "Submit" button or press Enter.
2. **Delete Items**: Click the "X" button next to an item to delete it. A confirmation dialog will appear before deletion.
3. **Search Items**: Type in the "Search Items..." input field to filter the items in the list. The list updates in real-time based on the search term.

### File Structure

- `index.html`: The main HTML file containing the structure of the application.
- `functionality.js`: The JavaScript file containing the logic for adding, deleting, and filtering items.
- `bootstrap.min.css`: The CSS file from Bootstrap for styling.

### Code Explanation

#### HTML

The HTML file includes a header for the application's title and search input, a form for adding new items, and a list for displaying the items.

#### JavaScript

- **addItem**: Handles the addition of new items to the list.
- **removeItem**: Handles the deletion of items from the list.
- **filterItems**: Filters the displayed items based on the search term.

```javascript
// Form submit Event
form.addEventListener('submit', addItem);

// Delete Event
itemList.addEventListener('click', removeItem);

// Filter Event
filterItem.addEventListener('keyup', filterItems)

function addItem(e){
    e.preventDefault();

    var newData = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item mb-1';
    li.appendChild(document.createTextNode(newData));

    var btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('X'));

    li.appendChild(btn);
    itemList.appendChild(li);

    document.getElementById('item').value = '';
}

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to remove this item? Note: Items removed cannot be retrieved again')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var data = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent

        if (itemName.toLowerCase().indexOf(data)!= -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none'
        }
    })
}
