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
import CollectCard from "./Pages/CollectCard";
import Pleasantness_Rating from "./Pages/Pleasantness_Rating";
import Login from "./Pages/Login";
import Question from "./Pages/Question";
import Wired_Adjust_Comfortable from "./Pages/Wired/Wired_Adjust_Comfortable";
import Wireless_Adjust_Comfortable from "./Pages/Wireless/Wireless_Adjust_Comfortable";
import Speaker_Adjust_Comfortable from "./Pages/Speaker/Speaker_Adjust_Comfortable";
import Wired_Gap from "./Pages/Wired/Wired_Gap";
import Wired_Pleasantness from "./Pages/Wired/Wired_Pleasantness";
import Wired_Huggins from "./Pages/Wired/Wired_Huggins";
import Wired_F0shift from "./Pages/Wired/Wired_F0shift";
import Speaker_F0shift from "./Pages/Speaker/Speaker_F0shift";
import Speaker_Gap from "./Pages/Speaker/Speaker_Gap";
import Speaker_Pleasantness from "./Pages/Speaker/Speaker_Pleasantness";
import Speaker_Huggins from "./Pages/Speaker/Speaker_Huggins";
import Wireless_Huggins from "./Pages/Wireless/Wireless_Huggins";
import Wireless_F0shift from "./Pages/Wireless/Wireless_F0shift";
import Wireless_Gap from "./Pages/Wireless/Wireless_Gap";
import Wireless_Pleasantness from "./Pages/Wireless/Wireless_Pleasantness";
import PreCollectCardLab from "./Pages/PreCollectCardLab";
import QuestionLab from "./Pages/QuestionLab";

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
        <Route path={`/Pleasantness_Rating`} element={<Pleasantness_Rating />} />
        <Route path={`/TMTF`} element={<TMTF />} />
        <Route path={`/Adjust_Comfortable`} element={<Adjust_Comfortable />} />
        <Route path={`/CollectCard`} element={<CollectCard />} />
        <Route path={`/PreCollectCard`} element={<CollectCard />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/Question`} element={<Question />} />
        <Route path={'/PreCollectCardLab'} element={<PreCollectCardLab />} />
        <Route path={'/QuestionLab'} element={<QuestionLab />} /> 
        
        <Route path={`/Wired/Wired_Adjust_Comfortable`} element={<Wired_Adjust_Comfortable />} />
        <Route path={`/Wired/Wired_F0shift`} element={<Wired_F0shift />} />
        <Route path={`/Wired/Wired_Gap`} element={<Wired_Gap />} />
        <Route path={`/Wired/Wired_Pleasantness`} element={<Wired_Pleasantness />} />
        <Route path={`/Wired/Wired_Huggins`} element={<Wired_Huggins />} />
        
        <Route path={`/Wireless/Wireless_Adjust_Comfortable`} element={<Wireless_Adjust_Comfortable />} />
        <Route path={`/Wireless/Wireless_F0shift`} element={<Wireless_F0shift />} />
        <Route path={`/Wireless/Wireless_Gap`} element={<Wireless_Gap />} />
        <Route path={`/Wireless/Wireless_Huggins`} element={<Wireless_Huggins />} />
        <Route path={`/Wireless/Wireless_Pleasantness`} element={<Wireless_Pleasantness />} />

        
        <Route path={`/Speaker/Speaker_Adjust_Comfortable`} element={<Speaker_Adjust_Comfortable />} />
        <Route path={`/Speaker/Speaker_F0shift`} element={<Speaker_F0shift />} />
        <Route path={`/Speaker/Speaker_Gap`} element={<Speaker_Gap />} />
        <Route path={`/Speaker/Speaker_Pleasantness`} element={<Speaker_Pleasantness />} />
        <Route path={`/Speaker/Speaker_Huggins`} element={<Speaker_Huggins />} />
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
