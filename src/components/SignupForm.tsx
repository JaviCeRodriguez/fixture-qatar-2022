import React from "react";
import { Formik } from "formik";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { supabase } from "../utils/supabaseClient";

const SignupForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signUpWithEmail = async (values: {
    email: string;
    password: string;
  }) => {
    // @ts-ignore
    const { user, session, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={signUpWithEmail}
            >
              {({ handleSubmit, handleChange, handleBlur, values }) => (
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                  />
                  <Input
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name="password"
                  />
                  <Button type="submit">Registrar</Button>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={600}
        color={"white"}
        bg={"pink.400"}
        _hover={{
          bg: "pink.300",
        }}
        onClick={onOpen}
      >
        Registro
      </Button>
    </>
  );
};

export default SignupForm;
