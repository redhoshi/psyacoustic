////////////////
/// 途中退室用
////////////////

import {React,useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate,useLocation } from 'react-router-dom';
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
  Input,
  CardHeader
} from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { CopyToClipboard } from 'react-copy-to-clipboard';



export default function Login() {
  const [userID, setUserID] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userID) {
      navigate('/collect-card', { state: { userID } });
    } else {
      alert('ユーザーIDを入力してください');
    }
  };


  return (
    <Flex justify="center" align="center" wrap="wrap">
      <Center py={12} px={6}>
        <Card>
          <CardHeader>
            <Heading size='md'> ログイン </Heading>
          </CardHeader>
          <CardBody>
            <Text>ユーザーIDを入力してください</Text>
            <Input
              placeholder="ユーザーID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              mt={4}
            />
          </CardBody>
          <CardFooter>
            <Button onClick={handleLogin} mt={4}>ログイン</Button>
          </CardFooter>
        </Card>
      </Center>
    </Flex>
  );
}
