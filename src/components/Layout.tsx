import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Nav from "./Nav";

interface LayoutType {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <Box w="100vw">
      <Container
        maxW="container.xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Nav />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
