'use strict'

var numberOfFilms;

numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

alert(personalMovieDB.count);
personalMovieDB.movies[0] = prompt('Один из последних просмотренных фильмов?', 'MOVIE'); 
alert(personalMovieDB.movies[0]);
personalMovieDB.movies[1] = prompt('Один из последних просмотренных фильмов?', 'MOVIE'); 
alert(personalMovieDB.movies[1]);

console.log(personalMovieDB);