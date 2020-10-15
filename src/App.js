import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import About from './components/about'
import Skills from './components/skills'
import Education from './components/education';
import Experience from './components/experience'
import Projects from './components/projects'

class App extends Component {

  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<About></About>
          <Skills></Skills>
          <Education></Education>
					<Experience></Experience>
          <Projects></Projects>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
