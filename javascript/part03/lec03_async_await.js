function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((result) => {
      return result.json(); // Return the parsed JSON data
    })
    .then((data) => {
      console.log(data); // Log the data
    })
    .catch((err) => {
      console.error(err); // Use console.error to log the error
    });
}

async function fetchDataAsync() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (err) {}
}

fetchDataAsync();
