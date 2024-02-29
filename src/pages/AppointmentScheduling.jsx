import React from "react";

import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";

const AppointmentScheduling = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Schedule Your Appointment
      </Heading>
      {/* Appointment scheduling content */}
      <Grid templateColumns="repeat(7, 1fr)" gap={4}>
        {/* Simulated calendar dates */}
        {Array.from({ length: 28 }, (_, i) => (
          <GridItem key={i} w="100%" h="40px" bg="blue.100" onClick={() => alert(`Date ${i + 1} selected`)}>
            {`Date ${i + 1}`}
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AppointmentScheduling;
