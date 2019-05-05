import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './search.js';
import movieData from '../data/movieData.json';
import AddMovie from './add.js';
import Watch from './watch.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      watched: []
    };
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }


  // sets filteredMovies state and movies state to movies that include query
  searchMovies(event, query) {
    var filteredMoviesArr = this.state.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    this.setState({
      filteredMovies: filteredMoviesArr,
      movies: filteredMoviesArr
    });
    if (this.state.filteredMovies.length === 0) {
      alert('Sorry brah, search not found.');
    }
    event.preventDefault();
  }

  // adds movie to movies array and clears filteredMovies array
  addMovie(event, movieToAdd) {
    var newMovie = {'title': movieToAdd};
    this.state.movies.push(newMovie);
    this.setState({
      movies: this.state.movies,
      filteredMovies: []
    });
    event.preventDefault();
  }

  markWatched(event, movie) {
    console.log('ayyy');
    var watchedMovie = {'title': movie};
    this.state.watched.push(watchedMovie);
    this.setState({
      watched: this.state.watched
    });
    event.preventDefault();
  }



  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <Watch movies={this.state.movies} markWatched={this.markWatched} />
          <br></br>
          <MovieList movies={this.state.movies} />
        </div>
      );
    } else if (this.state.filteredMovies.length >= 1) {
      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <Watch movies={this.state.movies} markWatched={this.markWatched} />
          <br></br>
          <MovieList movies={this.state.filteredMovies} />
        </div>
      );
    }
  }
}


export default App;