////////////////
/// 音量調整画面
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




// それぞれのカードに異なる画像URLと背景色を指定します
const CARD_DATA = [
  {
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/myport-698a9.appspot.com/o/comfortable%404x.png?alt=media&token=eb8de1a1-9eb7-4ff8-924a-943a637350d6',
    bgColor: 'rgba(255, 255, 255, 0.4)',
    title: 'Adjust Comfortable Level',
    brandtext: 'e',
    link:'/Adjust_Comfortable', // adjustに変更する 
  },
];




export default function Speaker_main() {
  const navigate = useNavigate();
  
  const location = useLocation();
  const data = location.state;

  console.log(data)

  const onClickPage1 = (link) => {
    navigate(link, {state:data});
    //navigate("/EmbeddedPage");
  };

  return (
        <Flex justify="center" align="center" wrap="wrap">
          {CARD_DATA.map(({ imageUrl, bgColor, title, brandtext, link }, index) => (
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
                    <Button px={12} colorScheme='gray' size='md' onClick={()=>{onClickPage1(link)}}>Start</Button>
                  </Stack>
                </Stack>
              </Box>

            </Center>
            
          ))}
        </Flex>
  );
}
