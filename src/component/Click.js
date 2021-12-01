import React, { Component } from 'react'
import bell1 from './bell1.png';
import bell2 from './bell2.jpg';

export default class Click extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Subscribe to react",
            sub: "Subscribe",
            imageUrl: bell1,
            color: "red"
        }
    }

    buttonChange = ()=>{
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed",
            color: "green"
        })
    }

    imageChange = ()=>{
        this.setState({
            imageUrl: bell2,
            message: "Thank you for subscribing!"
            
        })
    }

    styles = {
        width: "100px",
        height: "100px"
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button 
                    style = {{color: this.state.color}}
                    onClick={this.buttonChange}>{this.state.sub}</button>
                <p/>
                <img
                    style = {this.styles}
                    src={this.state.imageUrl}
                    onClick={this.imageChange}
                    alt=""
                />
                <h1>I'm {this.props.age}</h1>
            </div>
        )
    }
}
