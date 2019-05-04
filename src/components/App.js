import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './search.js';
import movieData from '../data/movieData.json';
import AddMovie from './add.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      displayedMovies: MovieList,
      filteredMovies: []
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }


  searchMovies(event, query) {
    var filteredMoviesArr = this.state.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    this.setState({
        filteredMovies: filteredMoviesArr
    });
    event.preventDefault();
  }

  addMovie(event, movieToAdd) {
    this.state.filteredMovies = [];
    var newMovie = {
      'title': movieToAdd
    };
    this.state.filteredMovies.push(newMovie);
    this.setState({
      filteredMovies: this.state.filteredMovies
    });
    event.preventDefault();
  }


  render() {
    if (this.state.filteredMovies.length === 0) {

      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <MovieList movies={this.state.movies} />
        </div>
      );
   
    } else if (this.state.filteredMovies.length >= 1) {
   
      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <MovieList movies={this.state.filteredMovies} />
        </div>
      );

    }
  }
}


export default App;