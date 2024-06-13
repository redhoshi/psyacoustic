import React from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { PiBrowserFill } from "react-icons/pi";



const converter = (M) => {
  let str = '';
  for (let i = 0; i < M.length; i++) {
    str += String.fromCharCode(M.charCodeAt(i) + 1);
  }
  return str;
};

const mail_to = (k_1, k_2) => {
  const email = `${k_1}${converter(
    String.fromCharCode(
      96, 106, 96, 106, 104, 45, 114, 103, 104, 103, 110, 45, 114, 114, 63, 96, 107, 116, 108, 109, 104, 45, 115, 114, 116, 106, 116, 97, 96, 45, 96, 98, 45, 105, 111, 62, 114, 116, 97, 105, 100, 98, 115, 60
    )
  )}${k_2}`;
  window.location.href = `mailto:${email}`;
};

export default function Contact() {
  return (
    <Container bg="gray.200" maxW="full" mt={0} centerContent overflow="hidden">
      <div id="contact"></div>
      <Flex>


        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
          <Heading size='md'>Contact</Heading>
          {/**
         * <Heading>Contact</Heading>
        <VStack pl={0} spacing={3} alignItems="flex-start">
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: '2px solid #1C6FEB' }}
              leftIcon={<MdPhone color="#1970F1" size="20px" />}>
              +91-988888888
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: '2px solid #1C6FEB' }}
              leftIcon={<MdEmail color="#1970F1" size="20px" />}>
              hello@abc.com
            </Button>
            <Button
              size="md"
              height="48px"
              width="200px"
              variant="ghost"
              color="#DCE2FF"
              _hover={{ border: '2px solid #1C6FEB' }}
              leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
              Karnavati, India
            </Button>
          </VStack>
           */}
          <HStack
            mt={{ lg: 10, md: 10 }}
            spacing={5}
            px={5}
            alignItems="flex-start">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                mail_to("", "");
              }}
            >
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  mail_to("", "");
                }}
              ></Link>

              <IconButton
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#f7a562' }}
                icon={<MdEmail size="28px" />}
              />
            </Link>

            <Link href="https://redhoshi.github.io" isExternal>
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#f7a562' }}
                icon={<BsGithub size="28px" />}
              /></Link>
            <Link href="https://redhoshi.github.io/psyacoustic" isExternal>
              <IconButton
                aria-label="discord"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#f7a562F' }}
                icon={<PiBrowserFill size="28px" />}
              /></Link>
          </HStack>
        </Box>

      </Flex>
    </Container>
  );
}
