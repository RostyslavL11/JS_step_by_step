"use strict";
// 2.15

const numberOfFilms = prompt ("How many movies have you watched", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

for ( let i = 0; i < 2; i++) {
    const a = prompt('What is the last movie that you have watched?', ''),
          b = prompt('How would you mark this movie');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('Error');
        i--;
    }
}   

if(personalMovieDB.count < 10) {
    console.log('You have watched to litte movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You love movies');
} else if (personalMovieDB.count >= 30) {
    console.log('WOW, you love movies so much');
} else {
    console.log('error');
}

console.log(personalMovieDB);