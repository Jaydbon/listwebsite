function addweekly() {
    var input = document.getElementById('input').value;
    if (input == ""){}
    else {
        const task = document.createTextNode(input);
        var listItem = document.createElement('li');
            var inp = document.createElement('input');
            inp.setAttribute('type', 'checkbox');
            inp.setAttribute('onclick', 'removeItem(this)');

                var text = document.createElement('p');
                text.appendChild(task);

            listItem.appendChild(inp);
            listItem.appendChild(text);
        document.getElementById("addtskbtn").appendChild(listItem);
    }


}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       addweekly()
       return true;
    } else {
       return false;
    }
 }

function removeItem(checkbox) {
    var listItem = checkbox.parentNode;
    listItem.parentNode.removeChild(listItem);
}