////////////////
/// Home
////////////////


import logo from '../logo.svg';
import '../App.css';
import { useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from '../Pages/Nav';
import BeforeNav from '../Pages/Before_Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import CollectCard from './CollectCard';
import EyeCatch from './EyeCatch';
import Contact from './Contact';
import DemoOrExp from './DemoOrExp';
import PreCollectCard from './PreCollectCard'

function Home() {

  const location = useLocation();
  const {useID, login, adjust,FDL,GAP,ITD,ILD,ADJUST,HP,TMTF} = location.state || {};
  //const {FDL,GAP,ITD,ILD,ADJUST,HP,TMTF} = location.state || {};
  //const {useID, login, adjust} = [1,1,1];

  return (
    <div className="App">
      <ChakraProvider>
        {login==true ? <Simple useID/>:<BeforeNav/>}
        <EyeCatch useID/>
        {/* Logged in したら */}
        { login==true && adjust==false ? (<PreCollectCard useID/>) : login==true && adjust==true ? (<CollectCard useID FDL GAP ITD ILD ADJUST HP TMTF
        />):<DemoOrExp/>}
        <Contact/>
      </ChakraProvider>
    </div>
  );
}

export default Home;
