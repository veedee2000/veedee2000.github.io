import React, { Component } from 'react'

export default class Institute extends Component {

    constructor (props){
        super(props) 

        this.state = {
            name: this.props.information.name,
            start: this.props.information.start,
            end: this.props.information.end,
            summary: this.props.information.summary,
            index: this.props.index
        }
    }

    render(){
        return(
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                <div className={"timeline-icon color-" + Number(this.state.index + 2)}>
                    <i className="icon-pen2" />
                </div>
                <div className="timeline-label">
                    <h2>{this.state.name} <span>{this.state.start} - {this.state.end}</span></h2>
                    <p>{this.state.summary}</p>
                </div>
                </div>
            </article>
        )
    }
}