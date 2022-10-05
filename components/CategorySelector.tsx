import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import categories from '../config/categories';
import CategoryIcon from './CategoryIcon';
import { Category } from '@prisma/client';

type Props = { value?: Category; onChange: (value: string) => void };

const CategorySelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Menu placement="top">
      <Tooltip label="Select category">
        <MenuButton as={Button} variant="outline" h="100%" minH="80px">
          {value ? (
            <CategoryIcon name={value} iconProps={{ w: '50px', h: '50px' }} />
          ) : (
            'Category'
          )}
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuOptionGroup
          value={value}
          type="radio"
          onChange={(v) => onChange(typeof v === 'string' ? v : v[0])}
        >
          {categories.map((v) => (
            <MenuItemOption value={v.value} key={v.value}>
              {v.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default CategorySelector;
