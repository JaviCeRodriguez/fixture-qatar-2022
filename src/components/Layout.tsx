import React from "react";
import { Box, Container, HStack, Spinner } from "@chakra-ui/react";
import Nav from "./Nav";
import { Session } from "@supabase/supabase-js";

interface LayoutType {
  children: React.ReactNode;
  session: Session | null;
  loading: boolean;
}

const Layout: React.FC<LayoutType> = ({ children, session, loading }) => {
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
            <Nav session={session} />
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
