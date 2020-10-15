import React, { Component } from 'react'

export default class Company extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            name: this.props.information.name,
            role: this.props.information.role,
            start: this.props.information.start,
            end: this.props.information.end,
            summary: this.props.information.summary,
            index: this.props.index
        }
    }

    render() {
        return (
            <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                <div className="timeline-entry-inner">
                <div className={"timeline-icon color-" + Number(this.state.index + 3)}>
                    <i className="icon-pen2" />
                </div>
                <div className="timeline-label">
                    <h2>{this.state.name} <span>{this.state.start} - {this.state.end}</span></h2>
                    <span>{this.state.role}</span>
                    <p></p>
                    <p>{this.state.summary}</p>
                </div>
                </div>
            </article>
        )
    }

}