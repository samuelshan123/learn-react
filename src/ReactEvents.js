import React from "react";

export default class ReactEvents extends React.Component{
     btn="click"
    constructor(){
        super()
        this.state={count:0,button:"add"}
    }
     clickme=()=>{
        this.setState({
            count:this.state.count+1,
            button:"added"
        })
        // alert('Clicked')
    }
 render(){
    return (
        <div  style={{textAlign:"center"}}>
        <h1>Count : {this.state.count}</h1>
        <h4></h4>
        <button onClick={this.clickme}>{this.state.button}</button>
        </div>
    )
 }
}