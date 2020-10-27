// Our Object for Todos and its utility func
var todos = {
Todo : [],

addTodo : function(TodoText) {
  this.Todo.push({TodoText : TodoText, completed : false});
},

ChangeTodo : function(pos, newText){
  this.Todo[pos].TodoText = newText;
},

DeleteTodo : function(pos){
  this.Todo.splice(pos, 1);
},

Togglecompleted : function(pos){
  this.Todo[pos].completed = !(this.Todo[pos].completed);
},

Toggleall : function(){
  var count = 0;
  
  for(var i = 0; i < this.Todo.length; i++)
  {
    if(this.Todo[i].completed)
      count++;
  }

  if(count === this.Todo.length)
  {
    for(var i = 0;i < this.Todo.length;i++)
    {
      this.Todo[i].completed = false;
    }
  }

  else{
    for(var i = 0; i < this.Todo.length;i++)
    {
      this.Todo[i].completed = true;
    }
  }
}


};


  // Add your code here
