// create your App component here
import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                <ul>
                {this.state.peopleInSpace.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {this.setState({
            peopleInSpace: data.people
        })
     })
    }

}

export default App