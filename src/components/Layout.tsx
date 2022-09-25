import React from "react";
import { Box, Container, HStack, Spinner } from "@chakra-ui/react";
import Nav from "./Nav";
import { useAuth } from "../contexts/AuthContext";

interface LayoutType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  const { loading } = useAuth();

  return (
    <Box w="100vw">
      <Container
        maxW="container.xl"
        minH="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {!loading ? (
          <>
            <Nav />
            {children}
          </>
        ) : (
          <HStack h="100vh">
            <Spinner size="xl" />
          </HStack>
        )}
      </Container>
    </Box>
  );
};

export default Layout;
