import { Story, Meta } from '@storybook/react';
import { Navigation, NavigationProps } from './Navigation';
import docs from './Navigation.docs.mdx';

const NavigationStory: Story<NavigationProps> = (args: NavigationProps) => <Navigation {...args}></Navigation>;

export const Default = NavigationStory.bind({});
export const WithDisabledItem = NavigationStory.bind({});

const items = [
  {
    childItems: [
      {
        data: '0childData0',
        name: 'One childOne',
      },
      {
        data: '0childData1',
        name: 'One childtwo',
      },
    ],
    data: 'data0',
    iconName: 'nav_home',
    name: 'one',
  },
  {
    childItems: [
      {
        data: '1childData0',
        name: 'Two childOne',
      },
      {
        data: '1childData1',
        name: 'Two childtwo',
      },
    ],
    data: 'data1',
    iconName: 'nav_inbox',
    name: 'two',
  },
  { data: 'data2', iconName: 'nav_account', name: 'three', useBadge: true },
  {
    childItems: [
      {
        data: '2childData0',
        name: 'Three childOne',
      },
      {
        data: '2childData1',
        name: 'Three childtwo',
      },
    ],
    data: 'data3',
    iconName: 'action_add',
    name: 'four',
  },
  { data: 'data4', iconName: 'action_attach', name: 'five' },
  { data: 'data5', iconName: 'action_add', name: 'six' },
  { data: 'data6', iconName: 'nav_credit_darkweb', name: 'seven' },
];

Default.args = {
  activeIndex: 1,
  items: items,
};

WithDisabledItem.args = {
  disabledItems: [0],
  items: items,
};

export default {
  argTypes: {},
  component: Navigation,
  parameters: {
    docs: { page: docs },
  },
  title: ' Navigation/Navigation',
} as Meta;
