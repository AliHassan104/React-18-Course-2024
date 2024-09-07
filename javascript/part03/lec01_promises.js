const promise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    //resolve("operation successfull");
    rejected("operation rejected");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
