import React from 'react';
import { Expense } from '@prisma/client';
import { Container, Stack } from '@chakra-ui/react';
import ListElem from './ListElem';

interface Props {
  expenses: Expense[];
}

function List({ expenses }: Props) {
  return (
    <Container maxW="container.md">
      <Stack gap={1}>
        {expenses.map((props) => (
          <ListElem {...props} key={props.id} />
        ))}
      </Stack>
    </Container>
  );
}

export default List;
