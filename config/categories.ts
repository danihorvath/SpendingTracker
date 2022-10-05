import { Category } from '@prisma/client';
import {
  faBuilding,
  faPlaneDeparture,
  faPizzaSlice,
  faBolt,
  faHouseCrack,
  faHospital,
  faCoins,
  faHeadphonesSimple,
  faTicket,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    value: 'housing',
    label: 'Housing',
    icon: faBuilding,
    color: 'blue.500',
  },
  {
    value: 'travel',
    label: 'Travel',
    icon: faPlaneDeparture,
    color: 'green.800',
  },
  {
    value: 'food',
    label: 'Food',
    icon: faPizzaSlice,
    color: 'orange.400',
  },
  {
    value: 'utilities',
    label: 'Utilities',
    icon: faBolt,
    color: 'yellow.400',
  },
  {
    value: 'insurance',
    label: 'Insurance',
    icon: faHouseCrack,
    color: 'purple.400',
  },
  {
    value: 'healthcare',
    label: 'Healthcare',
    icon: faHospital,
    color: 'teal.400',
  },
  {
    value: 'financial',
    label: 'Financial',
    icon: faCoins,
    color: 'yellow.400',
  },
  {
    value: 'lifestyle',
    label: 'Lifestyle',
    icon: faHeadphonesSimple,
    color: 'yellow.400',
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
    icon: faTicket,
    color: 'yellow.400',
  },
  {
    value: 'miscellaneous',
    label: 'Miscellaneous',
    icon: faCircleQuestion,
    color: 'gray.600',
  },
];

export function getConfig(name: Category = 'miscellaneous') {
  return (
    categories.find((v) => v.value === name) ||
    categories.find((v) => v.value === 'miscellaneous') ||
    categories[0]
  );
}

export default categories;
