////////////////
/// 実験終了画面
////////////////

import React from 'react';
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
  CardHeader
} from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { CopyToClipboard } from 'react-copy-to-clipboard';



export default function CollectCard() {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  console.log(data.userID)
  
  const base64Encode = (str) => {
    return btoa(str);
  };

  // ユーザーIDをBase64エンコード
  const encodedUserID = base64Encode(data.userID);

  console.log('Encoded UserID:', encodedUserID, data.userID);


  return (
    <Flex justify="center" align="center" wrap="wrap">
      <Center py={12} px={6}>
          <Card>
            <CardHeader>
              <Heading size='md'> 実験終了 </Heading>
            </CardHeader>
            <CardBody>
              <Text>実験にご協力いただきありがとうございます。以下の文字列をlancers上でご登録ください。</Text>
              <CopyToClipboard text={encodedUserID}>
              <Text cursor="pointer" _hover={{ color: 'blue.500' }}>
                {encodedUserID}（クリックしてコピー）
              </Text>
            </CopyToClipboard>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
      </Center>
    </Flex>
  );
}
