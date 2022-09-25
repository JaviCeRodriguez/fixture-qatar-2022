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
import { useAuth } from "../contexts/AuthContext";

const LoginForm: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { signInPassword } = useAuth();

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
              onSubmit={(values) => {
                signInPassword(values);
                onClose();
              }}
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
