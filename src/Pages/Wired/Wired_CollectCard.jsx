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




export default function Wired_CollectCard() {
  const navigate = useNavigate();
  
  const location = useLocation();
  const data = location.state;

  console.log(data,'data');

  // それぞれのカードに異なる画像URLと背景色を指定します
  const CARD_DATA = [
    {
      //imageUrl: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/wired_wall.png?alt=media&token=f8d9a3ef-43d9-465a-af6e-0f314ca5278d',
      bgColor: 'rgba(255, 255, 255, 0.8)',
      title: 'Frequency Discrimination Level',
      brandtext: 'a',
      link:'../Wired/Wired_F0shift',
      //link:'/f0shift',
      active: data.wired_FDL,
    },
    {
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/wired_wall.png?alt=media&token=f8d9a3ef-43d9-465a-af6e-0f314ca5278d',
      bgColor: 'rgba(255, 255, 255, 0.7)',
      title: 'Gap Detection',
      brandtext: 'b',
      link:'../Wired/Wired_Gap',
      active: data.wired_GAP,
    },
    {
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/wired_wall.png?alt=media&token=f8d9a3ef-43d9-465a-af6e-0f314ca5278d',
      bgColor: 'rgba(255, 255, 255, 0.4)',
      title: 'Pleasantness Rating',
      brandtext: 'e',
      link:'../Wired/Wired_Pleasantness',
      active: data.wired_DYAD,
    },
    {
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/wired_wall.png?alt=media&token=f8d9a3ef-43d9-465a-af6e-0f314ca5278d',
      bgColor: 'rgba(255, 255, 255, 0.3)',
      title: 'Huggins Pitch',
      brandtext: 'f',
      link:'../Wired/Wired_Huggins',
      active: data.wired_HP,
    },
  ];


  const onClickPage1 = (link) => {
    navigate(link,{state:data});
    //navigate("/EmbeddedPage");
  };

  return (
        <Flex justify="center" align="center" wrap="wrap">
          {CARD_DATA.map(({ imageUrl, bgColor, title, brandtext, link, active }, index) => (
            <Center key={index} py={12} px={6}>
              <Box
                role={'group'}
                p={6}
                maxW={'200px'}
                w={'full'}
                bg={bgColor}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                style={
                  active === false ? { opacity: 0.2, pointerEvents: 'none' } : {} // 条件に基づいてスタイルを適用
                }
                >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'150px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${imageUrl})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}>
                  <Image
                    rounded={'lg'}
                    height={150} //230
                    width={80} //282
                    objectFit={'cover'}
                    src={imageUrl}
                  />
                </Box>
                <Stack pt={2} align={'center'}>
                  <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    Brand {brandtext}
                  </Text>
                  <Heading fontSize={'1xl'} fontFamily={'body'} fontWeight={500}>
                    {title}
                  </Heading>
                  <Stack direction={'row'} align={'center'}>
                    <Button px={12} colorScheme='gray' size='md' onClick={()=>{onClickPage1(link)}}>Start</Button>
                    {/* 
                  <Text fontWeight={800} fontSize={'xl'}>
                  $57
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  $199
                </Text>
                */}
                  </Stack>
                </Stack>
              </Box>

            </Center>
            
          ))}
        </Flex>
  );
}
