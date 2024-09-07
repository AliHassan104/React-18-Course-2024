const todos = [
  { id: 1, task: "learn javascript", completed: false },
  { id: 2, task: "learn python", completed: true },
  { id: 3, task: "build a project", completed: true },
];

const completedTodos = todos.filter((todo) => todo.completed == true);

completedTodos.forEach((completedTodo) => console.log(completedTodo));

const includesTasks = todos.filter((todo) => todo.task.includes("project"));

includesTasks.forEach((includesTask) => console.log(includesTask));
