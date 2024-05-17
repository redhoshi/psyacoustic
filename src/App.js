import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from './Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import EmbeddedPage from './Pages/Embed_Page';
import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path={`/psyacoustic`} element={<Home />} />
        <Route path={`/EmbeddedPage`} element={<EmbeddedPage />} />
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
