import React, { Component } from 'react'

export default class EachProject extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.information.name,
            summary: this.props.information.summary,
            github: this.props.information.github,
            link: this.props.information.link,
            index : this.props.index
        }
    }

    render(){

        return(
                <div className="col-md-4 text-center animate-box">
                <div className="card card-1">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.summary}</p>
                        <div className="row">
                            <a href = {this.state.link} target="_blank" className="fas fa-link fa-lg col-sm-6"></a>
                            <a href = {this.state.github} target="_blank" className="fab fa-github fa-lg col-sm-6"></a>
                        </div>
                </div>
                </div>
        )
    }
}