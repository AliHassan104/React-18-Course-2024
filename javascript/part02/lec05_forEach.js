const todos = [
  { id: 1, task: "learn javascript", completed: false },
  { id: 2, task: "learn python", completed: true },
  { id: 3, task: "build a project", completed: true },
];

todos.forEach((todo, index) => {
  console.log(todo +"index : "+ index);
  todo.completed = true;
});
