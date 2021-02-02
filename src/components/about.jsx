import React, { Component } from 'react'

export default class About extends Component {

  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hello, I am Varun, a budding SWE and a current IT undergrad at Jadavpur University, Kolkata</p>
                    <p>I am passionate about Web Development and have an eager interest in learning new technologies. My proficiency lies in Data Structures, Algorithms and CS Fundamentals.</p>
                    <p>Incoming SDE Intern at <b style={{color:"#ff8c00"}}>Amazon</b> '21. Pretty excited to learn new stuff!!!</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
