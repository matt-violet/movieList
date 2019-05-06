import React from 'react';
import MovieList from './movieList.js';
import SearchBar from './search.js';
import AddMovie from './add.js';
import WatchButtons from './watchButtons.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      filteredMovies: [],
      watched: [],
      toWatch: []
    };
    this.markWatched = this.markWatched.bind(this);
    this.searchMovies = this.searchMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.showWatched = this.showWatched.bind(this);
    this.showToWatch = this.showToWatch.bind(this);
    this.toggleWatchBtn = this.toggleWatchBtn.bind(this);
  }


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

  addMovie(event, movieToAdd) {
    var newMovie = {
      'title': movieToAdd,
      'watched': false
    };
    this.state.movies.push(newMovie);
    this.state.toWatch.push(newMovie);
    this.setState({
      movies: this.state.movies,
      filteredMovies: [],
      toWatch: this.state.toWatch
    });
    event.preventDefault();
  }

  // still needs to change 'watch' button to say 'watched'
  markWatched(event, movie) {
    var watchedMovie = {
      'title': movie.title,
      'watched': true
    };
    for (var i=0; i<this.state.watched.length; i++){
      if (this.state.watched[i].title.toLowerCase() === watchedMovie.title.toLowerCase()){
        return;
      }
    }
    this.state.watched.push(watchedMovie);
    this.state.toWatch.splice(this.state.toWatch.indexOf(watchedMovie), 1);
    this.setState({
      watched: this.state.watched,
      toWatch: this.state.toWatch
    });
    event.preventDefault();
  }
  
  showWatched(event, watchedArr) {
    this.setState({
      movies: watchedArr
    });
    event.preventDefault();
  }
  
  showToWatch(event, toWatchArr) {
    this.setState({
      movies: toWatchArr
    });
    event.preventDefault();
  }
  
  toggleWatchBtn() {
    if (document.getElementById('watchBtn').value === 'watch') {
      document.getElementById('watchBtn').value = 'watched';
    } else {
      document.getElementById('watchBtn').value = 'watch';
    }
  }
  
  
  
  render() {
    if (this.state.filteredMovies.length === 0) {
      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <WatchButtons 
            movies={this.state.movies} 
            watchedArr={this.state.watched} 
            toWatchArr={this.state.toWatch}
            showWatched={this.showWatched}
            showToWatch={this.showToWatch}  
          />
          <br></br>
          <MovieList 
            movies={this.state.movies} 
            markWatched={this.markWatched} 
            toggleWatchBtn={this.toggleWatchBtn}  
          />
        </div>
      );
    } else if (this.state.filteredMovies.length >= 1) {
      return (
        <div>
          <AddMovie addMovie={this.addMovie} />
          <SearchBar searchMovies={this.searchMovies} />
          <WatchButtons 
            movies={this.state.movies} 
            watchedArr={this.state.watched} 
            toWatchArr={this.state.toWatch}
            showWatched={this.showWatched} 
            showToWatch={this.showToWatch}  
          />
          <br></br>
          <MovieList 
            movies={this.state.filteredMovies} 
            markWatched={this.markWatched} 
            toggleWatchBtn={this.toggleWatchBtn}  
          />
        </div>
      )
    }
  }
}


export default App;