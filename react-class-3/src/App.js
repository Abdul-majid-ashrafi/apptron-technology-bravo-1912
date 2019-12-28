import React from 'react';
import  DefaultCard,{ RedCard, BlueCard, GreenCard } from './card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <RedCard title="Header" />
        {/* <div>hello`</div> */}
        <DefaultCard title="Simple Card" />
        {/* <div>hello`</div> */}
        <GreenCard title="Body" />
        <div>hello`</div>
        <BlueCard title="Footer" />
      </header>
    </div>
  );
}

export default App;
