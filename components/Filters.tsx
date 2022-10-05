import React from 'react';
import { Flex, Container, HStack } from '@chakra-ui/react';
import CategorySelector from './CategorySelector';
import { withRouter, NextRouter } from 'next/router';
import { Category } from '@prisma/client';

type Props = { router: NextRouter };

function Filters({ router }: Props) {
  const selectedCategory =
    Category[router.query.category as keyof typeof Category];

  return (
    <Container maxW="container.md">
      <Flex py={3} p={3} bg="white" borderRadius={'lg'} boxShadow="sm">
        <HStack>
          <CategorySelector
            value={selectedCategory}
            onChange={(category) => {
              router.push({
                pathname: '/',
                query: {
                  ...router.query,
                  category,
                },
              });
            }}
          />
        </HStack>
      </Flex>
    </Container>
  );
}

export default withRouter(Filters);
