import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

const App = (props) => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  // With useCallback hook, toggleParagraphHandler is guaranteed to be always the same object in memory
  // (useCallback "saves" our function for subsequent calls)
  // the 2nd argument, the array of dependencies is empty because it never changes
  // (we could have added setShowParagraph as a dependency, but by design of React's useState hook, that setter state function never 
  // changes (neither shallowly nor deeply))
  const toggleParagraphHandler = useCallback(() => setShowParagraph((prev) => !prev), []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
};

export default App;
