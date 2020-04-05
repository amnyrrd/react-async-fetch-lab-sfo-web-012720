import React, { Component } from 'react'

export default class App extends Component {
    state = { 
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((person, id) => <p key={id}>{person.name}</p>)}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(({people}) => this.setState({
                peopleInSpace: people
            }))
    }


}


