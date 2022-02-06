import React, { useState } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

const App = (props) => {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => setShowParagraph((prev) => !prev);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
};

export default App;
