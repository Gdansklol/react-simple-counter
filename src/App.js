import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';


function App() {
  console.log("Rendering App")
  return (
    <>
      Counter with Class Component
      <Counter initialCount={0} />
      Counter Hooks wiht function Component
      <CounterHooks initialCount={0} />
    </>
  );
}

export default App;
