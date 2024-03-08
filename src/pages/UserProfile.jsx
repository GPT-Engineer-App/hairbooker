import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, useToast, Image, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    toast({
      title: "Login Attempt",
      description: "You attempted to log in.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack p={5} spacing={6} align="stretch">
      <Box textAlign="center">
        <FaUserCircle size="3em" />
        <Heading as="h1" size="xl" my={4}>
          Welcome Back!
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Please login to your account
        </Text>
      </Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" boxShadow="sm" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" boxShadow="sm" />
      </FormControl>
      <Button mt={4} colorScheme="teal" onClick={handleLogin} boxShadow="md">
        Login
      </Button>
    </VStack>
  );
};

export default UserProfile;
