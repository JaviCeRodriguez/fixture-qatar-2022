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

const LoginForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const signInWithEmail = async (values: {
    email: string;
    password: string;
  }) => {
    // @ts-ignore
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inicio de sesión</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={signInWithEmail}
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
                  <Button type="submit">Submit</Button>
                </form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Button fontSize={"sm"} fontWeight={400} onClick={onOpen}>
        Inicio de sesión
      </Button>
    </>
  );
};

export default LoginForm;
