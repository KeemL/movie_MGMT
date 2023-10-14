const allMovies = [];

// Define a movie class with parameters title (string), rating (number), and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

// Add a movie OBJECT to the allMovies array
function addMovie(movie) {
    allMovies.push(movie);

    const addMovieForm = document.getElementById("add-movie-form");
addMovieForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const watched = document.getElementById("watched").checked;

    const newMovie = new Movie(title, rating, watched);
    addMovie(newMovie);
    printMovies(); 

    document.getElementById("title").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("watched").checked = false;
});
}

// Iterate through all elements of allMovies array
// Display the total number of movies in allMovies array
function printMovies() {
    console.log("Printing all movies...");
    
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; 
    let totalMovies = 0;

    allMovies.forEach((movie) => {
        totalMovies++;
        const movieItem = document.createElement("li");
        movieItem.innerHTML =`
          <span class="bold">Title:</span> ${movie.title}, 
          <span class="bold">Rating:</span> ${movie.rating}, 
          <span class="bold">Watched:</span> ${movie.haveWatched ? "Yes" : "No"}`;
        movieItem.textContent = `Title: ${movie.title}, Rating: ${movie.rating}, Watched: ${movie.haveWatched ? "Yes" : "No"}`;
        movieItem.classList.add("movie-item");
        movieList.appendChild(movieItem);
    });

    const totalMoviesElement = document.getElementById("total-movies");
    totalMoviesElement.textContent = `${totalMovies}`;
}

function highRatings(rating) {
  const totalRatesElement = document.getElementById("high-rated-movies");
  let y = 0;

  const highRatedList = document.getElementById("high-rated-list");
  highRatedList.innerHTML = ""; 

  allMovies.forEach((movie) => {
      if (movie.rating >= rating) {
          y++;
          const rateItem = document.createElement("li");
          rateItem.textContent = `${movie.title} has a rating of ${movie.rating}`;
          rateItem.classList.add("rate-item");
          highRatedList.appendChild(rateItem);
      }
  });

  console.log(`In total, there are ${y} matches.`);
  totalRatesElement.textContent = `${y}`;
}

// Toggle the 'haveWatched' property of the specified movie 
function changeWatched(title) {
    const movieToToggle = allMovies.find((movie) => movie.title === title);
    if (movieToToggle) {
        movieToToggle.haveWatched = !movieToToggle.haveWatched;
        console.log(`The movie ${movieToToggle.title} has been changed to ${movieToToggle.haveWatched ? 'Watched' : 'Not Watched'}`);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const showHighRatedButton = document.getElementById("show-high-rated-button");
    const toggleWatchedStatusButton = document.getElementById("toggle-watched-status-button");

    showHighRatedButton.addEventListener("click", function() {
        const rating = parseFloat(document.getElementById("rating-input").value);
        highRatings(rating);
    });

    toggleWatchedStatusButton.addEventListener("click", function() {
        const title = document.getElementById("title-input").value;
        changeWatched(title);
        printMovies();
    });
});


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();

console.log("----------------");
console.log("A new movie is added");
console.log("----------------");
const newMovie = new Movie("Parasite", 2, false);
addMovie(newMovie);
printMovies();

console.log("----------------");
console.log("changing the status of the movie...");
console.log("----------------");
changeWatched("Spiderman");
printMovies();

console.log("----------------");
console.log("changing the status of the movie...");
console.log("----------------");
changeWatched("Parasite");
printMovies();

console.log("----------------");
console.log("printing movie that has a rating higher than 3.5");
console.log("----------------");
highRatings(3.5);



