import React from "react";

import { Box, Heading } from "@chakra-ui/react";

import { Avatar, Button, Divider, List, ListItem, ListIcon, VStack } from "@chakra-ui/react";
import { FaRegCalendarAlt, FaTimes } from "react-icons/fa";

const UserProfile = () => {
  const personalDetails = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    image: "/images/profile-pic.jpg",
  };

  const pastBookings = [
    { date: "2024-01-20", service: "Haircut" },
    { date: "2024-02-15", service: "Hair Dye" },
  ];

  const upcomingAppointments = [
    { date: "2024-03-12", service: "Haircut", id: 1 },
    { date: "2024-03-22", service: "Hair Dye", id: 2 },
  ];

  return (
    <VStack p={5} spacing={4} align="stretch">
      <Heading as="h1" size="xl" mb={6}>
        Your Profile
      </Heading>
      <Avatar name={personalDetails.name} src={personalDetails.image} size="xl" />
      <Heading size="lg">{personalDetails.name}</Heading>
      <Text>{personalDetails.email}</Text>
      <Divider my={6} />

      <Heading size="md" mb={4}>
        Past Bookings
      </Heading>
      <List>
        {pastBookings.map((booking, index) => (
          <ListItem key={index} mb={2}>
            <ListIcon as={FaRegCalendarAlt} color="green.500" />
            {`${booking.date}: ${booking.service}`}
          </ListItem>
        ))}
      </List>
      <Divider my={6} />

      <Heading size="md" mb={4}>
        Upcoming Appointments
      </Heading>
      <List>
        {upcomingAppointments.map((appointment) => (
          <ListItem key={appointment.id} mb={2}>
            <ListIcon as={FaRegCalendarAlt} color="blue.500" />
            {`${appointment.date}: ${appointment.service}`}
            <Button size="sm" ml={4} colorScheme="blue">
              Reschedule
            </Button>
            <Button size="sm" ml={2} colorScheme="red" leftIcon={<FaTimes />}>
              Cancel
            </Button>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default UserProfile;
