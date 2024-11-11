////////////////
/// Card List
////////////////

import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  Flex,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import Wired_CollectCard from './Wired/Wired_CollectCard';
import Wireless_CollectCard from './Wireless/Wireless_CollectCard';
import Speaker_CollectCard from './Speaker/Speaker_CollectCard';
import Wired_PreCollectCard from './Wired/Wired_PreCollectCard';
import Wireless_PreCollectCard from './Wireless/Wireless_PreCollectCard';
import Speaker_PreCollectCard from './Speaker/Speaker_PreCollectCard';




export default function CollectCard() {
  const navigate = useNavigate();
  
  const location = useLocation();
  const data = location.state;

  console.log(data,data.random,'ランダム');

  const onClickPage1 = (link) => {
    navigate(link,{state:data});
    //navigate("/EmbeddedPage");
  };
  const renderCards = () => {
    switch (data.random) {
      case 1:
        return (
          <>
            {data.wired_exp === true && (data.wired_VOL === false ? <Wired_CollectCard /> : <Wired_PreCollectCard />)}
            {data.wired_exp === false && data.wireless_exp === true && (data.wireless_VOL === false ? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
            {data.wired_exp === false && data.wireless_exp === false && data.speaker_exp === true && (data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
          </>
        );
      case 2:
        return (
          <>
            {data.wired_exp === true && (data.wired_VOL === false ? <Wired_CollectCard /> : <Wired_PreCollectCard />)}
            {data.wired_exp === false && data.speaker_exp === true && ( data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
            {data.wired_exp === false && data.speaker_exp === false && data.wireless_exp === true && ( data.wireless_VOL === false? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
          </>
        );
      case 3:
        return (
          <>
            {data.wireless_exp === true && (data.wireless_VOL === false ? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
            {data.wireless_exp === false && data.wired_exp === true && (data.wired_VOL === false  ? <Wired_CollectCard /> : <Wired_PreCollectCard />)}
            {data.wireless_exp === false && data.wired_exp === false && data.speaker_exp === true && (data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
          </>
        );
      case 4:
        return (
          <>
            {data.wireless_exp === true && (data.wireless_VOL === false ? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
            {data.wireless_exp === false  && data.speaker_exp === true && (data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
            {data.wireless_exp === false  && data.speaker_exp === false && data.wired_exp === true && (data.wired_VOL === false ? <Wired_CollectCard /> : <Wired_PreCollectCard />)}
          </>
        );
      case 5:
        return (
          <>
            {data.speaker_exp === true && (data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
            {data.speaker_exp === false && data.wired_exp === true && (data.wired_VOL === false ?  <Wired_CollectCard /> : <Wired_PreCollectCard />)}
            {data.speaker_exp === false && data.wired_exp === false && data.wireless_exp === true && (data.wireless_VOL === false ? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
          </>
        );
      case 6:
        return (
          <>
            {data.speaker_exp === true && (data.speaker_VOL === false ? <Speaker_CollectCard /> : <Speaker_PreCollectCard />)}
            {data.speaker_exp === false && data.wireless_exp === true && (data.wireless_exp === false ? <Wireless_CollectCard /> : <Wireless_PreCollectCard />)}
            {data.speaker_exp === false && data.wireless_exp === false && data.wired_exp === true && (data.wired_exp === false ? <Wired_CollectCard /> : <Wired_PreCollectCard />)}
          </>
        );
      default:
        return null;
    }
  };

  return (
        <Flex justify="center" align="center" wrap="wrap" direction="column">
          {renderCards()}
        </Flex>
  );
}
