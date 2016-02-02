function loadBody() {
    items = document.getElementById('list');
    item = document.getElementById('item');

    todo = new ListCollection('todo');
    ready = new ListCollection('ready');

    changeTodo();
}

function add() {
    var msg = item.value;
    if( msg != "" ) {
        todo.add(msg);
        changeTodo();
        item.value = "";
    }
}

function changeTodo() {
    items.style = 'with=50%; background-color: red;';
    loadList(todo);
}

function changeReady() {
    items.style = 'with=50%; background-color: green;';
    loadList(ready);
}

function loadList(list) {
    items.innerHTML = '';
    var arr = list.all();

    for( var i = 0; i < arr.length; i++ ) {
        var msg = arr[i];

        var li = document.createElement('li');
        items.appendChild(li);

        var text = document.createElement('span');
        text.appendChild(document.createTextNode(msg));
        li.appendChild(text);

        if( list.key() == 'todo' ) {
            var btn = document.createElement('span');
            btn.appendChild(document.createTextNode('X'));
            btn.style = 'float: right; cursor: pointer;';
            btn.setAttribute('data-index', i);
            btn.addEventListener("click", function(){
                var index = this.getAttribute('data-index');
                ready.add(todo.get(index));
                todo.del(index);
                changeTodo();
            });
            li.appendChild(btn);
        }
    }
}
