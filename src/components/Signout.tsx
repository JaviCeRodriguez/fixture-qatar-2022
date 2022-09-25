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
import { supabase } from "../utils/supabaseClient";

const Signout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¿Cerrar sesión?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>¿Está seguro de cerrar sesión? 👀</ModalBody>
          <ModalFooter>
            <Button
              fontSize={"sm"}
              fontWeight={400}
              onClick={async () => {
                await supabase.auth.signOut();
                onClose();
              }}
            >
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
