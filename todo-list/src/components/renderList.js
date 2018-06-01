import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';

export default class RenderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: this.props.tasks };
        this.handleClick.bind(this);
        //var list = this.props.tasks;
        //this.listItems = list.map((l) =>
        //    <li>{l}</li>
        //);
    }
    handleClick(obj) {
        var textVal = document.getElementById("Add Task").value;
        this.props.tasks.push(textVal);
        //if (textVal !== "")
        //this.setState({ tasks: this.props.tasks });
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(textVal),
        }));
        //ReactDOM.render(document.getElementsByClassName('listGrid'), document.getElementById('root'));
    }
    render() {
        return (
            <div className="add-task-functionality">
                <Grid bsClass="container">
                    <Row className="show-grid">
                        <Col xs={12} md={8}><input type="text" id={this.props.label} placeholder={this.props.placeholder} /></Col>       
                        <Col xs={12} md={4}><Button id={this.props.button} bsStyle="primary" onClick={this.handleClick.bind(this, { '1': 1, '2': 2 })}>{this.props.button}</Button></Col>
                    </Row>
                    <Row className="show-grid">
                        <ul>
                        {this.props.tasks.map(item => (
                        <li key={item.id}>{item}</li>
                        ))}
                        </ul>
                    </Row>
                </Grid>
            </div>
        );
    }
}