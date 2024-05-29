////////////////
/// Card List
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
    link: '/f0shift',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/gap%404x.png?alt=media&token=46838642-e6b2-48e9-981f-bfb3bd592648',
    bgColor: 'rgba(255, 255, 255, 0.7)',
    title: 'Login',
    brandtext: 'b',
    link: '/Login',
  },
];




export default function CollectCard() {
  const navigate = useNavigate();



  const onClickPage1 = (link) => {
    navigate(link);
    //navigate("/EmbeddedPage");
  };

  return (
    <Flex justify="center" align="center" wrap="wrap">
      <Center py={12} px={6}>
        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
          <Card>
            <CardHeader>
              <Heading size='md'> Demo Play </Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'> Exp Login </Heading>
            </CardHeader>
            <CardBody>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log(decoded);
                  console.log(decoded.email);

                  const userData = {
                    email: decoded.email,
                    login: true,
                    adjust:false,
                  };
                  navigate('/psyacoustic', { state: userData });
                  // link to collect card
                  /*history.push({
                    pathname: '/receiver',
                    state: { message: decoded.email }
                  });*/
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Center>
    </Flex>
  );
}
