import React, { useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  Select,
  useToast,
  Calendar, // This is a placeholder, as we can't import a Calendar component from Chakra UI
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter, FaRegCalendarAlt } from "react-icons/fa";

const Index = () => {
  // We would use the API here, but for now, we'll just simulate the data
  const [user, setUser] = useState(null);

  const toast = useToast();

  const registerUser = async (userData) => {
    try {
      const response = await fetch("https://backengine-9e07.fly.dev/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setUser(result);
    } catch (error) {
      toast({
        title: "Error creating account.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // ... other functions for login, fetching services, stylists, appointments ...

  return (
    <ChakraProvider>
      <Container maxW="container.md" py={10}>
        <Stack spacing={8}>
          <Heading>Welcome to Haircut & Dye Booking App</Heading>

          {/* User Registration Screen */}
          <Box as="section">
            <Heading size="lg">User Registration</Heading>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const userData = Object.fromEntries(formData);
                registerUser(userData);
              }}
            >
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" name="name" type="text" placeholder="Your Name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" name="email" type="email" placeholder="Your Email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input id="password" name="password" type="password" placeholder="Password" />
                </FormControl>
                <Button type="submit" colorScheme="red" leftIcon={<FaRegCalendarAlt />}>
                  Sign Up
                </Button>
              </Stack>
            </form>
            <Flex align="center" justify="center" mt={4}>
              <Text>Or sign up with </Text>
              <Button variant="ghost" mx={2}>
                <FaFacebook />
              </Button>
              <Button variant="ghost" mx={2}>
                <FaGoogle />
              </Button>
              <Button variant="ghost" mx={2}>
                <FaTwitter />
              </Button>
            </Flex>
          </Box>

          {/* Other screens (Service Selection, Appointment Scheduling, etc.) would follow here... */}
        </Stack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
