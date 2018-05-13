import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

export default class SubmitButton extends React.Component {
    render() {
        return (
            <Button id={this.props.name} bsStyle="primary">{this.props.name}</Button>
        );
    }
}