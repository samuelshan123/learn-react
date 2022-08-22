import React from "react"
import Age from "./Age"

function Name(props){
    return(
        <div>
            <h1 className="name">name:{props.name}</h1>
        <Age age="21"></Age>
        </div>
    )
}

export default Name