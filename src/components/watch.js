import React from 'react';


class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toWatch: [],
            watched: []
        }
        this.watchHandler = this.watchHandler.bind(this);
    }
    
    watchHandler(event){

    }

    render(){
        return (
            <form>
                <input class ='watch' id='toWatch' type='submit' value='To Watch' />
                <input class='watch' id='watch' type='submit' value='Watched' />   
            </form>
        )
    }
}


export default Watch;