import React from "react";

import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";

const ServiceSelection = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Select Your Services
      </Heading>
      {/* Service selection content */}
      <SimpleGrid columns={2} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg">
          <Image src="/images/haircut.jpg" alt="Haircut" />
          <Box p={5}>
            <Heading size="md">Haircut</Heading>
            <Text mt={2}>Starting at $25</Text>
          </Box>
        </Box>
        <Box borderWidth="1px" borderRadius="lg">
          <Image src="/images/hairdye.jpg" alt="Hair Dye" />
          <Box p={5}>
            <Heading size="md">Hair Dye</Heading>
            <Text mt={2}>Starting at $40</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ServiceSelection;
