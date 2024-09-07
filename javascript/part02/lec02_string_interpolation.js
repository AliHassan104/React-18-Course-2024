const firstName = "John";

const greeting1 = "Hello ${firstName}"; // first name printed as string

const greeting2 = `Hello ${firstName}`;

console.log(greeting1);
console.log(greeting2);

const a = 10;
const b = 20;

const desc = `the sum of ${a} and ${b} is ${a + b}`;

console.log(desc);

const user = {
  name: "ali hassan",
  age: "24",
  city: "karachi",
};

const userDesc = `User Information: 
Name : ${user.name}
Age : ${user.age}
City : ${user.city}
`;

console.log(userDesc);
