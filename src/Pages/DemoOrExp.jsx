////////////////
/// DemoかExpか
/// Demo - 音量調整課題のみ
/// Exp - 音量調整(PreCollectCard)+聴覚心理実験(CollectCard)
////////////////

import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
  Card,
  CardBody,
  Divider,
  CardFooter,
  SimpleGrid,
  CardHeader
} from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";




// それぞれのカードに異なる画像URLと背景色を指定します
const CARD_DATA = [
  {
    //imageUrl: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/f0shift%404x.png?alt=media&token=5b152dce-9d1c-4a9e-9aea-9ebe34a2614c',
    bgColor: 'rgba(255, 255, 255, 0.8)',
    title: 'Demo play',
    brandtext: 'a',
    link: '/psyacoustic',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/gap%404x.png?alt=media&token=46838642-e6b2-48e9-981f-bfb3bd592648',
    bgColor: 'rgba(255, 255, 255, 0.7)',
    title: 'Login',
    brandtext: 'b',
    link: '/login',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/gap%404x.png?alt=media&token=46838642-e6b2-48e9-981f-bfb3bd592648',
    bgColor: 'rgba(255, 255, 255, 0.7)',
    title: 'Login',
    brandtext: 'b',
    link: '/psyacoustic',
  },
];




export default function CollectCard() {
  const navigate = useNavigate();

  const generateRandomId = () => {
    return Math.random().toString(36).substr(2, 9) + '-' + Date.now().toString(36);
  };

  const onClickPage1 = (link) => {

    var userID = generateRandomId();  // ユーザーIDの生成
    //console.log(userID, userstarte);

    const userData = {
      userID : userID,
      login : true,
      end_exp : false,
      question : true,
      random: 0,

      wired_VOL: true,
      wired_FDL : true, // for deactivate each button
      wired_GAP : true,
      wired_DYAD : true,
      wired_HP : true,
      wired_exp : true, // wired exp end
      
      wireless_VOL: true,
      wireless_FDL : true, // for deactivate each button
      wireless_GAP : true,
      wireless_DYAD : true,
      wireless_HP : true,
      wireless_exp : true, // wired exp end

      speaker_VOL: true,
      speaker_FDL : true, // for deactivate each button
      speaker_GAP : true,
      speaker_DYAD : true,
      speaker_HP : true,
      speaker_exp : true, // wired exp end

    };
    navigate(link, {state:userData});
    //navigate("/EmbeddedPage");
  };

  return (
    <Flex justify="center" align="center" wrap="wrap">
      <Center py={12} px={6}>
        <SimpleGrid spacing={10} templateColumns='repeat(2, 1fr)'>
          <Card>
              <CardHeader>
                <Heading size='md'> Exp Start </Heading>
              </CardHeader>
              <CardBody>
                <Text>初めて実験に参加される方はこちらから始めてください</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={()=>{onClickPage1(CARD_DATA[0].link)}}>Exp start</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Heading size='md'> Login </Heading>
              </CardHeader>
              <CardBody>
                <Text>ログインをしたい方はこちらから始めてください</Text>
              </CardBody>
              <CardFooter>
              <Button onClick={()=>{onClickPage1(CARD_DATA[1].link)}}>Login</Button>
              </CardFooter>
            </Card>
            {/*
          <Card>
            <CardHeader>
              <Heading size='md'> Exp Restart </Heading>
            </CardHeader>
            <CardBody>
              <Text>-*実験を0途中退室した方用です*-実験へのログインはこちら</Text>
            </CardBody>
            <CardFooter>
              <Button>Login here</Button>
            </CardFooter>
          </Card>
           */}
        </SimpleGrid>
      </Center>
    </Flex>
  );
}
