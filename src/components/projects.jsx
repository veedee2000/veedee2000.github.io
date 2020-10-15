import React, { Component } from 'react'
import EachProject from './eachProject'

export default class Projects extends Component{

    constructor(){
        super()

        this.state = {
            projects: [{
				'name': 'Leetcode Quiz App',
				'link': 'https://interviewquiz.netlify.app/',
                'summary': 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et'
            }
        ] // Array of object {name, summary}
        }
    }

    render() {

        return (
            <div>
                <section className="colorlib-about" data-section="projects">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading">Projects</h2>
                    </div>
                    </div>
                    <div className="row row-pt-md">
                        {this.state.projects.map((project, index) => (
                            <EachProject information = {project} key = {index} index = {index}></EachProject>
                        ))}
                    </div>
                </div>
                </section>
            </div>
        )
    }
}