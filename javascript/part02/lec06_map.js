const todos = [
  { id: 1, task: "learn javascript", completed: false },
  { id: 2, task: "learn python", completed: true },
  { id: 3, task: "build a project", completed: true },
];

const mappedTodos = todos.map((todo) => {
  return { id: todo.id, desc: todo.task };
});

mappedTodos.forEach((mappedTodo) => console.log(mappedTodo));
