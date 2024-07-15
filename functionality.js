var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filterItem = document.getElementById('filter')

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

