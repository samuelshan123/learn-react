// import logo from './logo.svg';
import './App.css';
import React from 'react';

class Test extends React.Component{
  render(){
   return(
    <h1>hi from test {this.props.name}</h1>
   )
  }
}

function Function(props){
  return(
    <h1>hi from {props.name}</h1>
  )
}

function App(props) {
  return (
    <div className="App">
    
      <h1>Hi react from {props.name}</h1>
      <Test name="test class copmo"></Test>
      <Function name=" function test component"></Function>
    </div>
  );
}

export default App;
