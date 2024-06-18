////////////////
/// Home
////////////////


import logo from '../logo.svg';
import '../App.css';
import { useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from '../Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import CollectCard from './CollectCard';
import EyeCatch from './EyeCatch';
import Contact from './Contact';
import DemoOrExp from './DemoOrExp';
import PreCollectCard from './PreCollectCard'

function Home() {

  const location = useLocation();
  const {useID, login, adjust} = location.state || {};

  return (
    <div className="App">
      <ChakraProvider>
        <Simple/>
        <EyeCatch/>
        {/* Logged in したら */}
        { login==true && adjust==false ? (<PreCollectCard useID/>) : login==true && adjust==true ? (<CollectCard useID/>):<DemoOrExp/>}
        <Contact/>
      </ChakraProvider>
    </div>
  );
}

export default Home;
