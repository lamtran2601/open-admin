import { ListView } from '@/modules/ListView';
import { Details } from '@/modules/Details';

export const LayoutRouters = [
  {
    path: '/',
    name: 'Layout',
    component: ListView,
  },
  {
    path: '/user',
    name: 'User',
    component: Details,
  },
];
