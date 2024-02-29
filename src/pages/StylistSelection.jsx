import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const stylists = [
  { name: "Alex Johnson", specialty: "Creative Haircuts", availability: "Mon, Wed, Fri", image: "/images/stylist1.jpg" },
  { name: "Sam Smith", specialty: "Color Specialist", availability: "Tue, Thu", image: "/images/stylist2.jpg" },
  { name: "Jessica Adams", specialty: "Formal Styling", availability: "Weekends", image: "/images/stylist3.jpg" },
];

const StylistSelection = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Choose Your Stylist
      </Heading>
      <SimpleGrid columns={3} spacing={10}>
        {stylists.map((stylist, index) => (
          <VStack key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={stylist.image} alt={stylist.name} boxSize="150px" objectFit="cover" />
            <Box p={5}>
              <Heading size="md">{stylist.name}</Heading>
              <Text mt={2}>{stylist.specialty}</Text>
              <Text mt={2}>Availability: {stylist.availability}</Text>
            </Box>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StylistSelection;
