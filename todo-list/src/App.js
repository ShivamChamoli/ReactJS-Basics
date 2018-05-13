import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/textbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

            <div className="row">
                <div className="col col-md-4"><Textbox label="Add Task" placeholder="Enter task" /></div>
                {/*<div class="col col-md-4"><SubmitButton /></div>*/}
            </div>
            <div className="row">
                
            </div>
         </div>
      </div>
    );
  }
}

export default App;
