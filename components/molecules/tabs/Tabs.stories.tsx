import { Story, Meta } from '@storybook/react';
import { Container } from 'components/atoms/container/Container';

import { Tabs, TabsProps } from './Tabs';

import docs from './Tabs.docs.mdx';

const TabsStory: Story<TabsProps> = (args: TabsProps) => (
  <Container classNames={['p-3']}>
    <Tabs {...args}></Tabs>
  </Container>
);

export const PillsVariant = TabsStory.bind({});
PillsVariant.args = {
  activeIndex: 1,
  onClick: () => {
    return 0;
  },
  tabNames: ['One', 'Two', 'Three'],
  variant: 'pills',
};

export const BarVariant = TabsStory.bind({});
BarVariant.args = {
  activeIndex: 2,
  onClick: () => {
    return 0;
  },
  tabNames: ['One', 'Two', 'Three'],
  variant: 'bar',
};

export const TabsVariant = TabsStory.bind({});
TabsVariant.args = {
  activeIndex: 2,
  tabNames: ['one', 'two', 'Three'],
  variant: 'tabs',
};

export default {
  argTypes: {
    activeIndex: { control: { type: 'number' } },
    stretch: { control: { type: 'boolean' } },
    variant: { control: { type: 'select' }, options: ['pills', 'bar', 'tabs'] },
  },
  component: TabsStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Navigation/Tabs',
} as Meta;
