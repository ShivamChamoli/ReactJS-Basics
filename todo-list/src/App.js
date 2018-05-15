import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/textbox'
import SubmitButton from './components/submitButton'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import ListTasks from './components/listTasks'

class App extends Component {
    render() {
    var tasks = ["study", "wash laundry", "cook food"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Jumbotron>
            <Grid bsClass="container">
                    <Row className="show-grid">
                        <Col xs={12} md={2}><code><Textbox label="Add Task" placeholder="Enter task" /></code></Col>
                        <Col xs={12} md={2}><code><SubmitButton name="Add tasks" list={tasks}/></code></Col>
                    </Row>
                    <Row className="show-grid" id="listGrid">
                        <Col xs={12} md={2}><ListTasks list={tasks} /></Col>
                    </Row>
            </Grid>
        </Jumbotron>
        </div>
    );
  }
}

export default App;
