import React from "react";
import { Formik } from "formik";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

const Signout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signOut } = useAuth();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Cerrar sesión?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>¿Está seguro de cerrar sesión? 👀</ModalBody>
          <ModalFooter>
            <Button fontSize={"sm"} fontWeight={400} onClick={signOut}>
              Si
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
              onClick={onClose}
            >
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button fontSize={"sm"} fontWeight={400} onClick={onOpen}>
        Cerrar sesión
      </Button>
    </>
  );
};

export default Signout;
