import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ReactDOM from 'react-dom';

export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { random: true };
        this.handleClick.bind(this);
    }
    handleClick(obj) {
        var textVal = document.getElementById("Add Task").value;
        this.props.list.push(textVal);
        //ReactDOM.render(document.getElementsByClassName('listGrid'), document.getElementById('root'));
    }
    render() {
        return (
            <Button id={this.props.name} bsStyle="primary" onClick={this.handleClick.bind(this, { '1':1,'2':2})}>{this.props.name}</Button>
        );
    }
}