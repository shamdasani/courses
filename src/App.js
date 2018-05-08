import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Courses from './Courses.js'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              Saint Peter{`'`}s Prep Science Department
            </h1>
          </header>
        </div>
        <Courses />
      </div>
    )
  }
}

export default App

// create conditional rendering.. Have a couple buttons saying class year and grades, and display those components only if selected!!s
