const movies = [];

const amount = prompt('How many movies do you want to rate?');

for (let i = 0; i < amount; i++) {
  const title = prompt('Enter movie title:');
  const rating = Number(prompt('Enter rating from 1 to 5:'));

  const movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

// sort highest to lowest
movies.sort(function (a, b) {
  return b.rating - a.rating;
});

// highest rated movie
const bestMovie = movies[0];

const target = document.querySelector('#target');

target.innerHTML += '<h2>Movie ratings</h2>';

movies.forEach(function (movie) {
  target.innerHTML += '<p>' + movie.title + ' - ' + movie.rating + '/5</p>';
});

target.innerHTML += '<h2>Highest rated movie</h2>';

target.innerHTML +=
  '<p>' + bestMovie.title + ' - ' + bestMovie.rating + '/5</p>';
