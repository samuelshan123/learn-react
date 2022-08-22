// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Name from './Name';


//Class component with props
class Test extends React.Component{
  render(){
   return(
    <h1>hi from test {this.props.name}</h1>
   )
  }
}
//function component with props
function Function(props){
  return(
    <div>
    <h1>hi from {props.name}</h1>
    <Name name="samuel"></Name>
    </div>

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
