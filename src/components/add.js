import React from 'react';


class AddMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addedMovie: ''
        }
        this.addHandler = this.addHandler.bind(this);
    }

    addHandler(event) {
        this.setState({addedMovie: event.target.value});
    }


    render(){
        return (
            <form id='form' onSubmit={(event) => this.props.addMovie(event, this.state.addedMovie)}>
                <input type='text' id='add' placeholder='Add a movie...' value={this.state.addedMovie} onChange={this.addHandler} />
                <input type='submit' value='Add' />   
            </form>
        )
    }

}

export default AddMovie;