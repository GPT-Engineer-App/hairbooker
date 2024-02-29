import React from "react";

import { Box, Heading } from "@chakra-ui/react";

const UserProfile = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={6}>
        Your Profile
      </Heading>
      {/* Placeholder for user profile content */}
      <div>User profile content will be here</div>
    </Box>
  );
};

export default UserProfile;
