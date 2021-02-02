import React, { Component } from 'react'
import Tech from './tech'

export default class Skills extends Component{

    constructor(){
        super()

        this.state = {
            techs: [{
                'name': 'Data Structures and Algorithms',
            },
            {
                'name': 'Web Development'
            },
            {
                'name': 'Git'
            },
            {
                'name': 'C / C++'
            },
            {
                'name': 'Python'
            },
            {
                'name': 'Java'
            },
            {
                'name': 'Object Oriented Programming'
            },
            {
                'name': 'DBMS'
            },
            {
                'name': 'Operating System'
            }
        ]
        }
    }

    render() {

        return (
            <div>
                <section className="colorlib-about" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading">Skills</h2>
                    </div>
                    </div>
                    <div className="row row-pt-md">
                        {this.state.techs.map((tech, index) => (
                            <Tech information = {tech} key = {index} index = {index}></Tech>
                        ))}
                    </div>
                </div>
                </section>
            </div>
        )
    }
}