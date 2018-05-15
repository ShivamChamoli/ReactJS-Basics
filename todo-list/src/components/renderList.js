import React, { Component } from 'react';

export default class RenderList extends React.Component {
    constructor(props) {
        super(props);
        var list = this.props.tasks;
        this.listItems = list.map((l) =>
            <li>{l}</li>
        );
    }
    render() {
        return (
            <ul>{this.listItems}</ul>
        );
    }
}