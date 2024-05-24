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
} from '@chakra-ui/react';

// それぞれのカードに異なる画像URLと背景色を指定します
const CARD_DATA = [
  {
    //imageUrl: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/f0shift%404x.png?alt=media&token=5b152dce-9d1c-4a9e-9aea-9ebe34a2614c',
    bgColor: 'rgba(255, 255, 255, 0.8)',
    title: 'Frequency Discrimination Level',
    brandtext: 'a',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/gap%404x.png?alt=media&token=46838642-e6b2-48e9-981f-bfb3bd592648',
    bgColor: 'rgba(255, 255, 255, 0.7)',
    title: 'Gap Detection',
    brandtext: 'b',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/itd%20v2%404x.png?alt=media&token=c14ec7ce-8619-4e61-9078-27cbc4a351cc',
    bgColor: 'rgba(255, 255, 255, 0.6)',
    title: 'Interaural Time difference',
    brandtext: 'c',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/ild%20v2.png?alt=media&token=71d2e9cc-8a58-4ca9-a7c2-213837f1f390',
    bgColor: 'rgba(255, 255, 255, 0.5)',
    title: 'Interaural Level difference',
    brandtext: 'd',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/comfortable%404x.png?alt=media&token=eb8de1a1-9eb7-4ff8-924a-943a637350d6',
    bgColor: 'rgba(255, 255, 255, 0.4)',
    title: 'Adjust Comfortable Level',
    brandtext: 'e',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/huggins%404x.png?alt=media&token=993d8215-95a7-48b6-b6b3-2fc140f412fd',
    bgColor: 'rgba(255, 255, 255, 0.3)',
    title: 'Huggins Pitch',
    brandtext: 'f',
  },
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/TMTF%404x.png?alt=media&token=1828095d-2406-4e62-9a8e-61479e80b8a2',
    bgColor: 'rgba(255, 255, 255, 0.3)',
    title: 'Temporal Modulation Transfer Function',
    brandtext: 'g',
  },
];



export default function CollectCard() {
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
                    <Button px={12} colorScheme='gray' size='md' onClick={onClickPage1}>Start</Button>
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
