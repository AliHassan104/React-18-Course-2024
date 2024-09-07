test01();

function test01() {
  console.log("we can call function before initializing");
}

const test02 = () => {
  console.log("but using arrow and const we can't call before initializing");
};

test02();
