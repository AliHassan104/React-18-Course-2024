function addTraditional1(a, b) {
  return a + b;
}

console.log(addTraditional1(3, 7));

const addTraditional2 = function (a, b) {
  return a + b;
};

console.log(addTraditional2(3, 7));

const add = (a, b) => a + b;

console.log(add(4, 6));

const add2 = (a, b) => {
  console.log("starting sum");
  return a + b;
};

console.log(add2(4, 3));

const test = () => {
  console.log("testing");
};

test();

const ids = [1, 2, 3, 4, 5];

ids.forEach((id) => {
  console.log(id);
});
