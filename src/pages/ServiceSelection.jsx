import React, { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const ServiceSelection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("http://localhost:3000/services");
      const data = await response.json();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Select Your Services
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        {services.map((service) => (
          <Box key={service.id} borderWidth="1px" borderRadius="lg" p={5}>
            <Heading size="md">{service.name}</Heading>
            <Text mt={2}>Starting at ${service.price}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ServiceSelection;
