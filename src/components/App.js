import React,{Component} from 'react';
import MovieList from './movieList.js';
import SearchBar from './search.js';
import movieData from '../data/movieData.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movieData,
      displayedMovies: MovieList,
      filteredMovies: [],
      resultsFound: false
    };
  
    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(event, query) {
    var filteredMoviesArr = this.props.movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    this.setState({
        filteredMovies: filteredMoviesArr,
        resultsFound: filteredMoviesArr.length > 0 ? true : false
    });
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <SearchBar searchMovies={this.searchMovies} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;