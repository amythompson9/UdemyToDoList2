var todos = [];
var input = prompt("What would you like to do?");

while (input !== "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new To Do");
        //add to todos array
        todos.push(newToDo);
    }
    //ask again for new input
    var input = prompt("What would you like to do?");
}
console.log("Ok. You quit the app.");