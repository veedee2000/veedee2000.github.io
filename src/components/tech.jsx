import React, { Component } from 'react'

export default class Tech extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.information.name,
            summary: this.props.information.summary,
            index : this.props.index
        }
    }

    render(){

        const icons = ["far fa-lightbulb", "fab fa-accusoft", "far fa-file-code", "fas fa-laptop", "fas fa-book", "fas fa-bookmark"]

        console.log(this.state.index)

        return(
            <div className="col-md-4 text-center animate-box">
                <div className={"services color-" + (Number(this.state.index + 1))}>
                <span className="icon">
                    <i className={icons[Number(this.state.index)]} />
                </span>
                <div className="desc">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.summary}</p>
                </div>
                </div>
            </div>
        )
    }
}