import React from "react";
import Age from "./Age";

class Place extends React.Component{
    render(){
        return(
            <h1 style={{color:"red"}}>Place:{this.props.place}</h1>
        )
    }
}

export default Place