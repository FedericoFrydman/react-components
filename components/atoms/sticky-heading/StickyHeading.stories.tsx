import { Story, Meta } from '@storybook/react';

import { StickyHeading, StickyHeadingProps } from './StickyHeading';

const StickyHeadingStory: Story<StickyHeadingProps> = (args: StickyHeadingProps) => <StickyHeading {...args} />;

export const Default = StickyHeadingStory.bind({});
Default.args = {
  children: 'test',
  position: 'header',
};

export const StickyWithTop = StickyHeadingStory.bind({});
StickyWithTop.args = {
  children: 'test',
  position: 'header',
  top: '70px',
};

export const StickyWithBottom = StickyHeadingStory.bind({});
StickyWithBottom.args = {
  bottom: '20px',
  children: 'test',
  position: 'header',
};

export default {
  argTypes: {
    position: { control: { type: 'select' }, options: ['header', 'footer'] },
  },
  component: StickyHeadingStory,
  title: 'Typography/StickyHeading',
} as Meta;
