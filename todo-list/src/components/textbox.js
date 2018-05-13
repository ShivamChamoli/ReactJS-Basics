import React, { Component } from 'react';
//import Bootstrap from 'bootstrap';

export default class Textbox extends React.Component {
    /*constructor(props) {
        super(props);
        //this.state = { date: new Date() };
    }*/

    render() {
        return (
            <div className="row">
                <div className="col col-md-4"><label htmlFor={this.props.label}>{this.props.label}</label></div>
                <div className="col col-md-4"><input type="text" id="{this.props.label}" placeholder={this.props.placeholder}></input></div>
            </div>        
        );
    }
}