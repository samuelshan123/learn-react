import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Name from "./Name";
import Navigate from "./Navigate";
import './index.css';

export default class ApiCall extends React.Component{
     btn="click"
    constructor(){
        super()
    }
     clickme=()=>{
    fetch("http://localhost:4000/getData").then(res=>res.json()).then(x=>{
        console.log(x);
    })
        // alert('Clicked')
    }
     insert =()=>{
        let description= document.getElementById("ip").value
        // alert(description)
        let payload={
            form_id:1,
            description:description
        }
         fetch("http://localhost:4000/insert",{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }).then(res=>res.json()).then(x=>{
             console.log(x);
         })
         }
 render(){
    return (
        <div  style={{textAlign:"center"}}>
        <h4></h4>
        <button onClick={this.clickme}>Get Data</button>

        <br></br>

        <input placeholder="type" id="ip"/>
        <button onClick={this.insert}>insert</button>

        <br></br>
      
       <Link to={'/navigate'}>
        vaviaget
       </Link>
        {/* <button onClick={window.location.href='/navigate'}>Navigate</button> */}

        </div>
    )
 }
}