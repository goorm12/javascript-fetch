// fetch 방법

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const url =
      "https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=rating";

    const response = await fetch(url);

    const data = await response.json();
    const movies = data.data.movies;

    const moviesContainer = document.getElementById("movies");
    moviesContainer.innerHTML = "";

    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
      <h2>${movie.title_long}</h2>
      <img src='${movie.medium_cover_image}' alt='${movie.title}'>
      <p>평점 : ${movie.rating} / 10</p>
      <p>장르 : ${movie.genres}</p>
      `;

      moviesContainer.appendChild(movieElement);
    });
  } catch (e) {
    console.log(e);
  }
});
