function checkOnclickEvent() {

   var li = document.createElement('li');
   li.innerHTML = 'Item ' + itemsByTagName.length;;
   list.appendChild(li);
}
var itemsByTagName = document.getElementsByTagName('li'),
   list = document.getElementById('list'),
   buttons = document.getElementById('addElem');
buttons.addEventListener('click', checkOnclickEvent);
