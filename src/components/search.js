import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event) {
        this.setState({query: event.target.value});
    }
    

    render(){
        return (
            <form onSubmit={(event) => this.props.searchMovies(event, this.state.query)}>
                <input type='text' className='search' id='search' placeholder='Search...' value={this.state.query} onChange={this.searchHandler} />
                <input type='submit' value='Search' />   
            </form>
        )
    }
}


export default SearchBar;