import React from 'react';
import Counter from './Counter';


function App() {
  console.log("Rendering App...")
  return (
    <Counter initialCount={0} />
  );
}

export default App;
