import React, { Component } from 'react'

export default class EachProject extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.information.name,
            summary: this.props.information.summary,
            link: this.props.information.link,
            index : this.props.index
        }
    }

    render(){

        let icons = ["far fa-lightbulb", "fab fa-accusoft", "far fa-file-code", "fas fa-laptop", "fas fa-book", "fas fa-bookmark"]
        icons.reverse()

        console.log(this.state.index)

        return(
            <div className="col-md-4 text-center animate-box">
                <div className={"services color-" + (Number(this.state.index + 4))}>
                <span className="icon">
                    <i className={icons[Number(this.state.index)]} />
                </span>
                <div className="desc">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.summary}</p>
                    <a href = {this.state.link} target="_blank"><u>View Project</u></a>
                </div>
                </div>
            </div>
        )
    }
}