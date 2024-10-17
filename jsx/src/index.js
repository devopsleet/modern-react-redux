// 1) Import th React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

// 2) Get a reference to the div with ID root

const el = document.getElementById("root");

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a Component

// function App() {
//   //let message = {color: 'red'}

//   return <textarea autoFocus></textarea>;

    

    // let message = 'Bye there'
    // if (Math.random() > 0.5) {
    //     message = 'Hello there';
    // }
    
// const date = new Date();
// const time = date.toLocaleDateString();
  // return <textarea autoFocus/>;
//}

// 5) Show the component on the screen
root.render(<App />);
