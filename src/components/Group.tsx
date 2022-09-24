import { Box, VStack } from "@chakra-ui/react";
import React from "react";

const Group: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" p="10">
      <VStack>
        <h1>🔰 Pais 1</h1>
        <h1>🔰 Pais 2</h1>
        <h1>🔰 Pais 3</h1>
        <h1>🔰 Pais 4</h1>
      </VStack>
    </Box>
  );
};

export default Group;
