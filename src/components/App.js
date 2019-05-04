import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './search.js';
import movieData from '../data/movieData.json';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData,
      displayedMovies: MovieList,
      filteredMovies: []
    };
    this.searchMovies = this.searchMovies.bind(this);
  }


  searchMovies(event, query) {
    var filteredMoviesArr = this.state.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    this.setState({
        filteredMovies: filteredMoviesArr
    });
    event.preventDefault();
  }


  render() {
    if (this.state.filteredMovies.length === 0) {

      return (
        <div>
          <SearchBar searchMovies={this.searchMovies} />
          <MovieList movies={this.state.movies} />
        </div>
      );
   
    } else if (this.state.filteredMovies.length >= 1) {
   
      return (
        <div>
          <SearchBar searchMovies={this.searchMovies} />
          <MovieList movies={this.state.filteredMovies} />
        </div>
      );

    }
  }
}


export default App;