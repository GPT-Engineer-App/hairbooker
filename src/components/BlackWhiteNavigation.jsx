import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const BlackWhiteNavigation = () => {
  return (
    <Flex as="nav" bg="black" color="white" p={4} justify="space-around">
      <Box>
        <Link as={RouterLink} to="/" p={2}>
          Home
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/services" p={2}>
          Services
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/schedule" p={2}>
          Schedule
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/stylists" p={2}>
          Stylists
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/confirmation" p={2}>
          Confirmation
        </Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/profile" p={2}>
          Profile
        </Link>
      </Box>
    </Flex>
  );
};

export default BlackWhiteNavigation;
