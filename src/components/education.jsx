import React, { Component } from 'react'
import Institute from './institute';

export default class Education extends Component {

    constructor(){
        super()
        this.state = {
            institutes: [{
                name: 'Jadavpur University',
                start: '2018',
                end: '2022 (Expected)',
                summary: 'B.E. Information Technology | CGPA : 8.18'
            },
            {
                name: 'Narayana Schools',
                start: '2016',
                end: '2018',
                summary: '12th CBSE : 88%'
            }
        ]
        }
    }

    render() {

        return (
            <div>
                <section className="colorlib-experience" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            {this.state.institutes.map((institute, index) => (
                                <Institute information = {institute} key = {index} index = {index}></Institute>
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