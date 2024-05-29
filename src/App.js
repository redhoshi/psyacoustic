import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from './Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import EmbeddedPage from './Pages/Embed_Page';
import F0shift from './Pages/F0shift';
import Gap from './Pages/Gap';
import Huggins_Pitch from './Pages/Huggins_Pitch';
import ITD from './Pages/ITD';
import ILD from './Pages/ILD';
import TMTF from './Pages/TMTF';
import Home from "./Pages/Home";
import Adjust_Comfortable from "./Pages/Adjust_Comfortable";
import Login from "./Pages/Login";
import CollectCard from "./Pages/CollectCard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={`/psyacoustic`} element={<Home />} />
        <Route path={`/EmbeddedPage`} element={<EmbeddedPage />} />
        <Route path={`/F0shift`} element={<F0shift />} />
        <Route path={`/Gap`} element={<Gap />} />
        <Route path={`/Huggins_Pitch`} element={<Huggins_Pitch />} />
        <Route path={`/ITD`} element={<ITD />} />
        <Route path={`/ILD`} element={<ILD />} />
        <Route path={`/TMTF`} element={<TMTF />} />
        <Route path={`/Adjust_Comfortable`} element={<Adjust_Comfortable />} />
        <Route path={`/Login`} element={<Login />} />
        <Route path={`/CollectCard`} element={<CollectCard />} />
        <Route path={`/PreCollectCard`} element={<CollectCard />} />
      </Routes>
      {/* 
      <div className="App">
          <ChakraProvider>
            <Simple />
            <CollectCard />
            
          </ChakraProvider>
        </div>
        {/* <EmbeddedPage/>*/}
    </BrowserRouter>
  );
}

export default App;
