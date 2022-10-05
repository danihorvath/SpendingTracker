import React from 'react';
import { Category } from '@prisma/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { chakra, LayoutProps } from '@chakra-ui/react';
import { getConfig } from '../config/categories';

type Props = { name: Category; iconProps?: LayoutProps };

const Icon = chakra(FontAwesomeIcon);
function CategoryIcon({ name, iconProps }: Props) {
  const config = getConfig(name);
  return <Icon icon={config.icon} color={config.color} {...iconProps} />;
}

export default CategoryIcon;
