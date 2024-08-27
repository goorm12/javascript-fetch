// xhr 방법

document.addEventListener("DOMContentLoaded", () => {
  const url = "https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=rating";

  const xhr = new XMLHttpRequest();
  // 초기화 요청
  xhr.open("GET", url);
  xhr.send();

  // onload 됐을때 실행
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data.data);

      displayMovies(data.data.movies);
    } else {
      console.error("Error fetching data");
      document.querySelector(
        "#movies"
      ).innerHTML = `<p>영화를 불러오는데 에러가 발생했습니다!</p>`;
    }
  };
});

function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = document.createElement("div");

    movieElement.innerHTML = `
      <h2>${movie.title_long}</h2>
      <img src='${movie.medium_cover_image}' alt='${movie.title_long}'>
      <p>평점 : ${movie.rating} / 10 </p>
      <p>장르 : ${movie.genres}</p>
    `;
    moviesContainer.appendChild(movieElement);
  });
}
