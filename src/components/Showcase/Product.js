import './index.css';
import React from "react";
export default class Product extends React.Component {
    //constructor(props) {
       // super(props);
    //}
    render(){
        console.log(this.props);
        return(
            <div className="Posts">
            <div className="Post-row">
            <div className="Row">
            <img src = {this.props.props.icon} style= {{width:"25px", height:"25px"}}/>
            <p>{this.props.props.row} </p>
            </div>
            <p> Title: {this.props.props.title} </p>
            <p> Summary: {this.props.props.summary} </p>
            <p> {this.props.props.bot} </p>
            </div>
            <div>
            <img src = {this.props.props.img} style= {{width:"250px"}}/>
            </div>
        </div>
        )
    }
}