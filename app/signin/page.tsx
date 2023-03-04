"use client";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export default function SignInPage() {
const [registerEmail, setRegisterEmail] = useState("");
const [registerPassword, setRegisterPassword] = useState("");

const handleSignIn = async (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  // validate email address format
  // const emailRegex = /^[^\s@]+@[^\s@]/;
  // if (!emailRegex.test(registerEmail)) {
  //   console.log('Invalid email address format');
  //   return;
  // }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    const user = userCredential.user;
    console.log('user', user);
    // redirect to home page
    window.location.href = '/';
  } catch (error) {
    // console.log(error.message);
    // redirect to home page
    window.location.href = '/';
  }
};
return (
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in</Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
        </Text>
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
        <FormControl id="name">
            <FormLabel>Full Name</FormLabel>
            <Input type="name" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              id="signup_submit"
              onClick={handleSignIn}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign In
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
);
}
