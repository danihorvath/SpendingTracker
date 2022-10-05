import React from 'react';
import { Expense } from '@prisma/client';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import CategoryIcon from './CategoryIcon';
import { getConfig } from '../config/categories';

function ListElem(props: Expense) {
  return (
    <Flex
      p={3}
      bg="white"
      borderLeftWidth={5}
      borderColor={getConfig(props.category).color}
      justify="space-between"
      align="center"
      borderRadius={'lg'}
      boxShadow="sm"
    >
      <Flex gap={3} align="center">
        <CategoryIcon
          name={props.category}
          iconProps={{ w: '70px', h: '50px' }}
        />
        <Box>
          <Heading size="sm">{props.summary}</Heading>
          <Text>{new Date(props.paid).toLocaleDateString()}</Text>
        </Box>
      </Flex>
      <Box>
        <Text fontSize="xl" fontWeight={600}>
          {props.sum.toLocaleString()} {props.currency}
        </Text>
      </Box>
    </Flex>
  );
}

export default ListElem;
