import React, { Component } from 'react'
import Company from './company'

export default class Experience extends Component {

    constructor(){
        super()
        this.state = {
            companies: [{
                name: 'GeeksForGeeks',
                role: 'Technical Content Writer',
                start: 'May\' 20',
                end: 'Aug \' 20',
                summary: 'Wrote articles in the domain of Data Structures, Algorithms and Mathematics.'
            },
            {
                name: 'Amazon',
                role: 'Incoming Summer Intern',
                start: 'May\' 21',
                end: 'July \'21',
                summary: 'Coming Soon!!!'
            }
        ]
        }
    }

    render() {

        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Work Experience</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {this.state.companies.map((company, index) => (
                                <Company information = {company} key = {index}  index = {index}></Company>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        )
    }

}