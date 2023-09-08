import React, { Component } from 'react';
import './App.css';
// https://github.com/vagabond-systems/cisco-task-2-model-answer

function Header() {
 return  <h2 className='header'> Sextant</h2>;
}

function Cards(){
  return(
    <div class="flex-container">
    <div>1</div>
    <div>2</div>
    <div>3</div>  
  </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <div className='Body'>
        <h2 className='Subheader'> This is your dashboard! </h2>
      <Cards/>
      </div>
      </div>
    );
  }
}

export default App;