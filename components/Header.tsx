import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="gray.500" mb="6">
      <Container maxW="container.lg" py={3}>
        <Heading color="white">Spending Tracker</Heading>
      </Container>
    </Box>
  );
}

export default Header;
