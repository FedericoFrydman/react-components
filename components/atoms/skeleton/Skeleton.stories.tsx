import { Story, Meta } from '@storybook/react';

import { Skeleton, SkeletonProps } from './Skeleton';

import docs from './Skeleton.docs.mdx';

const SkeletonStory: Story<SkeletonProps> = (args: SkeletonProps) => <Skeleton {...args} />;

export const Default = SkeletonStory.bind({});
Default.args = {
  count: 3,
};

export const Circular = SkeletonStory.bind({});
Circular.args = {
  circle: true,
  height: '120px',
  width: '120px',
};

export const Square = SkeletonStory.bind({});
Square.args = {
  height: '120px',
  width: '120px',
};

export default {
  argTypes: {
    circle: { control: { type: 'boolean' } },
    count: { control: { type: 'number' } },
    height: { control: { type: 'text' } },
    width: {
      control: { type: 'text' },
    },
  },
  component: SkeletonStory,
  parameters: {
    docs: { iframeHeight: 200, inlineStories: false, page: docs },
  },
  title: 'Components/Skeleton',
} as Meta;
