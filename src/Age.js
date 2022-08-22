import React from "react";
import Place from "./Place"

let Age=(props)=>{
    const age={
        color:"green",
        textAlign:"center"
    }
    return(
      <div>
          <h1 style={age}>Age:{props.age}</h1>
        <Place place="pilavilai"></Place>
      </div>
    )
}

export default Age