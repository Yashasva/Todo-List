//handler functions for buttons
var handlers = {
Toggleall : function(){
  todos.Toggleall();
  views.Displaytodos();
},

addTodo: function(){

  var todotext = document.getElementById('inputbar');
  todos.addTodo(todotext.value);
  todotext.value = ''; 
  views.Displaytodos();
},

ChangeTodo : function(){
  var pos = document.getElementById('num');
  var todotext = document.getElementById('changedtext');

  todos.ChangeTodo(pos.valueAsNumber, todotext.value);
  todotext.value = '';
  views.Displaytodos();
},

DeleteTodo : function(pos){
  todos.DeleteTodo(pos);
  views.Displaytodos();
}

};

var views = {
Displaytodos : function(){
  var ulist = document.querySelector('ul');
  ulist.innerHTML = '';
  for(var i = 0;i < todos.Todo.length;i++){
    var list = document.createElement('li');
    var todolist = todos.Todo[i];
    var toggleicon = '';
    if(todolist.completed)
      toggleicon = '(X)';
    else
      toggleicon = '( )';

    list.id = i;
    list.textContent = toggleicon + todos.Todo[i].TodoText;
    list.appendChild(this.createDeleteButton());
    ulist.appendChild(list);
  }
},

createDeleteButton: function(){
  var deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';
  return deleteButton;
},

setupEventListeners: function(){
  var ulist = document.querySelector('ul');
  ulist.addEventListener('click', function(event){
  var elementClicked = event.target;
  if(elementClicked.className === 'deleteButton')
  {
    handlers.DeleteTodo(parseInt(elementClicked.parentNode.id));
  }
  })
}
};

views.setupEventListeners();








