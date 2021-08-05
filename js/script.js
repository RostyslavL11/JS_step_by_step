const numberOfFilms = +prompt ("How many movies have you watched", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

const a = prompt('What is the last movie that you have watched?', ''),
      b = prompt('How would you mark this movie'),
      c = prompt('What is the last movie that you have watched?', ''),
      d = prompt('How would you mark this movie');

personalMovieDB.movies[a] = b;