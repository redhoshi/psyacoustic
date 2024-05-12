import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Simple from './Pages/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import EmbeddedPage from './Pages/Embed_Page';
import CollectCard from './Pages/CollectCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/EmbeddedPage`} element={<EmbeddedPage />} />
      </Routes>
      <div className="App">
          <ChakraProvider>
            <Simple />
            <CollectCard />
            {/* <EmbeddedPage/>*/}
          </ChakraProvider>
        </div>
    </BrowserRouter>
  );
}

export default App;
