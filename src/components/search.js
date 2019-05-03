import React,{Component} from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
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
                <input type='submit' value='Submit' />   
            </form>
        )
    }
}


export default SearchBar;

// set state.query to search text
// filter list to those containing search value
// re-render app with filtered results



// var SearchBar = (props) => (
//     <div>
//       <form onSubmit={props.submitHandler}>
//         <input type="text" className="search" id="search" placeholder="Search..." />
//         <input type="submit" className="submit-search" value="Go!" id="submit"/>
//       </form>
//     </div>
//   );