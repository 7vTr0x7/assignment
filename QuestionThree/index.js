async function fetchPostTitle() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchPostTitle();
