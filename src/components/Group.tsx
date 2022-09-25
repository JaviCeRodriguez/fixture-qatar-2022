import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import React from "react";
import GroupModal from "./GroupModal";

const Group: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GroupModal
        id={1}
        name="Grupo A"
        matchs={[]}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Box display="flex" flexDirection="column" m="10" onClick={onOpen}>
        <VStack>
          <h1>🔰 Pais 1</h1>
          <h1>🔰 Pais 2</h1>
          <h1>🔰 Pais 3</h1>
          <h1>🔰 Pais 4</h1>
        </VStack>
      </Box>
    </>
  );
};

export default Group;
