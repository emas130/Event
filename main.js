function checkOnclickEvent() {

   var li = document.createElement('li');
   li.innerHTML = 'Item';
   list.appendChild(li);
}

var list = document.getElementById('list'),
   buttons = document.getElementById('addElem');
buttons.addEventListener('click', checkOnclickEvent);
