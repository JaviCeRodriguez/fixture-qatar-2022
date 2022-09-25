import React from "react";
import {
  Box,
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GroupModalType } from "../utils/types";

const GroupModal: React.FC<GroupModalType> = (props) => {
  const { id, name, matchs, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box display="flex" justifyContent="center" gap="4">
            <VStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                </HStack>
                <Input w="12" value={3} />
                <Text>-</Text>
                <Input w="12" value={3} />
                <HStack>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                  <Text color="green.500">(3)</Text>
                </HStack>
                <Input w="12" value={3} disabled />
                <Text>-</Text>
                <Input w="12" value={3} disabled />
                <HStack>
                  <Text color="red.500">(2)</Text>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                </HStack>
                <Input w="12" value={3} />
                <Text>-</Text>
                <Input w="12" value={3} />
                <HStack>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                  <Text color="green.500">(3)</Text>
                </HStack>
                <Input w="12" value={3} disabled />
                <Text>-</Text>
                <Input w="12" value={3} disabled />
                <HStack>
                  <Text color="red.500">(2)</Text>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                </HStack>
                <Input w="12" value={3} />
                <Text>-</Text>
                <Input w="12" value={3} />
                <HStack>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
              <HStack>
                <HStack>
                  <Text>🔰 Pais 1</Text>
                  <Text color="green.500">(3)</Text>
                </HStack>
                <Input w="12" value={3} disabled />
                <Text>-</Text>
                <Input w="12" value={3} disabled />
                <HStack>
                  <Text color="red.500">(2)</Text>
                  <Text>Pais 4 🔰</Text>
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GroupModal;
