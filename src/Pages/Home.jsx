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
import EndExp from './EndExp'
import Wired_main from './Wired/Wired_main';
import Wired_CollectCard from './Wired/Wired_CollectCard';
import Wireless_main from './Wireless/Wireless_main';
import Wireless_CollectCard from './Wireless/Wireless_CollectCard';
import Speaker_main from './Speaker/Speaker_main';
import Speaker_CollectCard from './Speaker/Speaker_CollectCard';
import ThreeCard from './ThreeCard';
import PreCollectCardLab from './PreCollectCardLab';


function Home() {

  const location = useLocation();
  const {useID, login, end_exp, question, random, lab,
    wired_VOL, wired_FDL, wired_GAP, wired_DYAD, wired_HP, wired_exp,
    wireless_VOL, wireless_FDL, wireless_GAP, wireless_DYAD, wireless_HP, wireless_exp,
    speaker_VOL, speaker_FDL, speaker_GAP, speaker_DYAD, speaker_HP, speaker_exp,
  } = location.state || {};

  /*** 
    
  adjust -  アンケート
  wired - 有線
  wireless - 無線
  speaker -スピーカー
  
  ***/
  //const {FDL,GAP,ITD,ILD,ADJUST,HP,TMTF} = location.state || {};
  //const {useID, login, adjust} = [1,1,1];

  return (
    <div className="App">
      <ChakraProvider>
        {login==true ? <Simple useID/>:<BeforeNav/>}
        <EyeCatch useID/>
        {/* Logged in したら */}
        { 
        // アンケート終了 online
        login==true && question==true && end_exp==false && lab==true? (<PreCollectCardLab useID/>) 
        // アンケート終了 lab
        :login==true && question==true && end_exp==false && lab==false? (<PreCollectCard useID/>)
        
        // 有線と無線とスピーカーの選択
        :login==true && question==false && end_exp==false ? (<ThreeCard useID random wired_VOL wired_FDL wired_GAP wired_DYAD wired_exp wireless_VOL wireless_FDL wireless_GAP wireless_DYAD wireless_HP wireless exp speaker_VOL speaker_FDL speaker_GAP speaker_DYAD speaker_HP speaker_exp/>)
        // 終了判定
        : login==true && question==false && end_exp==true   ? <EndExp useID/> : <DemoOrExp/>
        /*
        login==true && adjust==false && endexp==false ? (<PreCollectCard useID/>) : login==true && adjust==true && endexp==false ? (<CollectCard useID wired_FDL wired_GAP wired_DYAD wired_HP wireless_FDL wireless_GAP wireless_DYAD wireless_HP speaker_FDL speaker_GAP speaker_DYAD speaker_HP
        />): login==true && adjust==true && endexp==true ? <EndExp/> : <DemoOrExp/>
        */
        }
        <Contact/>
      </ChakraProvider>
    </div>
  );
}

export default Home;
