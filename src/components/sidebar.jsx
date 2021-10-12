import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Varun Das",
      email: "dasvarunofficial@gmail.com",
      linkedIn: "https://www.linkedin.com/in/varun-das-514526141/",
      github: "https://github.com/veedee2000",
      twitter: "https://twitter.com/Varun41869216",
    };
  }

  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar">
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Varun Das</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i>{" "}
                <a href="mailto:dasvarunofficial@gmail.com">
                  dasvarunofficial@gmail.com
                </a>
              </span>
              <span style={{ style: "black" }}>
                <a
                  className="resume"
                  href="https://drive.google.com/file/d/10R-AuFT-QlxypKh0JbqVs_UP4I6W1Avd/view?usp=sharing"
                  target="_blank">
                  RÉSUME
                </a>
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#skills" data-nav-section="skills">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#experience" data-nav-section="experience">
                      Work Experience
                    </a>
                  </li>
                  <li>
                    <a href="#education" data-nav-section="education">
                      Education
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href={this.state.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href={this.state.github}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={this.state.twitter}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="icon-twitter2" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> by{" "}
                  <strong>veedee</strong>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
