import React from 'react';
import ReactDOM from 'react-dom';
import './aindex.css';

// VERY EASY 
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: Matthew</h1>
        <p>Age:28</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));