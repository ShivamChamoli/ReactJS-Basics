import React, { Component } from 'react';
//import Bootstrap from 'bootstrap'

export default class Textbox extends React.Component {
    /*constructor(props) {
        super(props);
        //this.state = { date: new Date() };
    }*/

    render() {
        return (
            <input type="text" id={this.props.label} placeholder={this.props.placeholder} />       
        );
    }
}