import React, { Component } from 'react'

export default class Tech extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.information.name,
            index : this.props.index
        }
    }

    render(){

        return(
            <div className="col-md-4 text-center animate-box">
                <div className="desc">
                    <h4>{this.state.name}</h4>
                </div>
            </div>
        )
    }
}