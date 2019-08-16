import React, { Component } from 'react';

class Course extends Component {

    state = {
        title: null
    }

    componentDidMount() {
        this.updateTitle();
    }

    componentDidUpdate() {
        this.updateTitle();
    }

    updateTitle(){
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (param[0] === "title") {
                if(this.state.title !== param[1]){
                    this.setState({
                        title: param[1]
                    })
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;