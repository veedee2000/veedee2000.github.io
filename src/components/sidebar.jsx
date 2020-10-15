import React, { Component } from 'react'

export default class Sidebar extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Varun Das',
      email: 'dasvarunofficial@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/varun-das-514526141/',
      github: 'https://github.com/veedee2000',
      twitter: 'https://twitter.com/Varun41869216'
    }
  }


  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Varun Das</a></h1>
              <span className="email"><i className="icon-mail"></i> dasvarunofficial@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#experience" data-nav-section="experience">Work Experience</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href={this.state.linkedIn} target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href={this.state.github} target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href={this.state.twitter} target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> by <strong>teamtrees</strong> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tree" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0zM5.934 4.5H6a.5.5 0 0 1 .424.765L4.402 8.5H4.5a.5.5 0 0 1 .447.724L3.31 12.5h9.382l-1.638-3.276A.5.5 0 0 1 11.5 8.5h.098L9.576 5.265A.5.5 0 0 1 10 4.5h.066L8 1.401 5.934 4.5z"/><path d="M7 13.5h2V16H7v-2.5z"/></svg>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
