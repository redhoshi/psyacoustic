import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from './Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import Experiment from './Pages/Embed_Page';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Simple/>
        <Experiment/>
      </ChakraProvider>
    </div>
  );
}

export default App;
