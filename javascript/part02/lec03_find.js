const todos = [
  { id: 1, task: "learn javascript", completed: false },
  { id: 2, task: "learn python", completed: true },
  { id: 3, task: "build a project", completed: false },
];

const todoById = todos.find(
  (todo) => todo.completed == false && todo.task == "build a project"
);

console.log(todoById);
