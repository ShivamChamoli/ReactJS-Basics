import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from './components/textbox'
import SubmitButton from './components/submitButton'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Jumbotron>
            <Grid bsClass="container">
                    <Row className="show-grid">
                        {/*<Col xs={12} md={8}>
                            <Textbox label="Add Task" placeholder="Enter task" /> 
                        </Col>
                        <Col xs={6} md={4}>
                            <SubmitButton name="Submit tasks" />
                        </Col>*/}
                        <Col xs={12} md={2}><code><Textbox label="Add Task" placeholder="Enter task" /></code></Col>
                        <Col xs={12} md={2}><code><SubmitButton name="Submit tasks" /></code></Col>
                    </Row>
            </Grid>
        </Jumbotron>
        </div>
    );
  }
}

export default App;
