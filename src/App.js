import React from 'react';
import './App.css';
import stanzas from './stanzas';
import Stanza from './Stanza';


function App() {
  return (
    <div className="App">
      <h1 className="title">This is just to say</h1>
      {stanzas.map((stanza, i) => (
      <Stanza key={i}>
        <div className="stanza">
          <span>{stanza}</span>
        </div>
      </Stanza>
      ))}
    </div>
  );
}

export default App;
