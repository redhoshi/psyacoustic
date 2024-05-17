////////////////
/// Home
////////////////


import logo from '../logo.svg';
import '../App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from '../Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import CollectCard from './CollectCard';
import EyeCatch from './EyeCatch';
import Contact from './Contact';

function Home() {
  return (
    <div className="App">
      <ChakraProvider>
        <Simple/>
        <EyeCatch/>
        <CollectCard/>
        <Contact/>
      </ChakraProvider>
    </div>
  );
}

export default Home;
