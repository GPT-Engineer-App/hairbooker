import React from "react";
import { Box, Heading, Button, Text, VStack, Divider } from "@chakra-ui/react";

const Confirmation = () => {
  // Placeholder data for the confirmation details
  const bookingDetails = {
    service: "Haircut and Hair Dye",
    stylist: "Alex Johnson",
    date: "March 5th, 2024",
    time: "11:00 AM",
    totalPrice: "$65",
  };

  return (
    <VStack spacing={4} align="stretch" p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Appointment Confirmation
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" p={4}>
        <Text fontSize="lg">
          <strong>Service:</strong> {bookingDetails.service}
        </Text>
        <Text fontSize="lg">
          <strong>Stylist:</strong> {bookingDetails.stylist}
        </Text>
        <Text fontSize="lg">
          <strong>Date:</strong> {bookingDetails.date}
        </Text>
        <Text fontSize="lg">
          <strong>Time:</strong> {bookingDetails.time}
        </Text>
        <Divider my={4} />
        <Text fontSize="lg">
          <strong>Total Price:</strong> {bookingDetails.totalPrice}
        </Text>
      </Box>
      <Button colorScheme="blue" size="lg">
        Confirm Appointment
      </Button>
    </VStack>
  );
};

export default Confirmation;
