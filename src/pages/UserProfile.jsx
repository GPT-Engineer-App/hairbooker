import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, VStack, useToast } from "@chakra-ui/react";

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
    <VStack p={5} spacing={4} align="stretch">
      <Heading as="h1" size="xl" mb={6}>
        Login
      </Heading>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      </FormControl>
      <Button mt={4} colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </VStack>
  );
};

export default UserProfile;
