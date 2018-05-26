import React, { Component } from 'react';
import RenderList from './renderList'

export default class ListTasks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <RenderList tasks={this.props.list} button="Submit Button" label="Add Task" placeholder = "Enter Task"/>
        );
    }
}