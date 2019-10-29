// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

import React, {Component} from 'react'

class Comp extends React{
  render(){
    console.log("I am a component!")
    return (
      <div>
        <h1>I am a component!</h1>
      </div>
    );
  }
}

export default Comp;



// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

names.map(name => {
  console.log(name + " is " + name.length + " characters long.")
})

for(let i=0; i<names.length; i++){
  console.log(`${names[i]} is ${names[i].length} characters long.`)
}



// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const {name,home,dislikes} = this.state;



// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

function updateCount() {
  let nuCount = this.state.count + 1;
  this.setState({count: nuCount})
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, { Component } from 'react';

class Recipes{
  constructor(props){
    super(props)
    this.state = {
      recipes:[{name: 'Meatballs'},{name: 'Mac & Cheese'}]
    }
  }

  render() {
    const {recipes} = this.state;
    let recipe = recipes.map((r,index) => {
        return(
          <li key={index.toString()}>{r.name}</li>
        )
      })
    return(
      
      <ul>
        {recipe}
      </ul>
    )
  }
}
export default Recipes;
