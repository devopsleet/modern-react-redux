// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {

  return <input style={{border: '1px solid blue'}}/>

  //const inputType = "number";
  //const minValue = 5;

  //return <input type={inputType} min = {minValue}/>
  //return <input style = {{border: '3px solid red'}} type="number" min = {5}/>

  //return <textarea autoFocus={true}/>
  // const message = [1,2,3];
  // const date = new Date();
  // const time = date.toLocaleDateString();
  // const name = "gagan";
  // const age = 23;
  // let message = "Bye there"
  // if (Math.random () > 0.5) {
  //     message = 'Hello There'
  // }
  // return <h1>Hi, My name is {name} {age}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
