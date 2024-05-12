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
  ButtonGroup
} from '@chakra-ui/react';

// それぞれのカードに異なる画像URLと背景色を指定します
const CARD_DATA = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.8)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'a',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1530096491893-1badda20a6b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.7)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'b',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1559156211-56c9fb18d0e7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.6)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'c',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1564135624576-c5c88640f235?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.5)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'd',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1563439180804-aa02cd22a6b7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.4)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'e',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1581092207044-6ea9c20959f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    bgColor: 'rgba(255, 255, 255, 0.3)',
    title: 'Fundamental Frequency Discrimination',
    brandtext: 'f',
  },
];



export default function ProductSimple() {
  const navigate = useNavigate();

  const onClickPage1 = () => {
    navigate("/EmbeddedPage");
  };

  return (
        <Flex justify="center" align="center" wrap="wrap">
          {CARD_DATA.map(({ imageUrl, bgColor, title, brandtext }, index) => (
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
                zIndex={1}>
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
                    <Button colorScheme='pink' size='md' onClick={onClickPage1}>Start</Button>
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
