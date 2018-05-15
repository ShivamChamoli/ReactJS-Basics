import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { random: true };
        this.handleClick.bind(this);
    }
    handleClick(obj) {
        /*this.setState(prevState => ({
            random: !prevState.random
        }));*/ 
        console.log(this.state.random);
    }
    render() {
        return (
            <Button id={this.props.name} bsStyle="primary" onClick={this.handleClick.bind(this, { '1':1,'2':2})}>{this.props.name}</Button>
        );
    }
}