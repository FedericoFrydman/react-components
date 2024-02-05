import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';

import docs from './Badge.docs.mdx';

const BadgeStory: Story<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

export const Default = BadgeStory.bind({});
Default.args = {
  bold: true,
  text: 'Default',
  variant: 'default',
};

export const Subtle = BadgeStory.bind({});
Subtle.args = {
  bold: false,
  text: 'Default',
  variant: 'default',
};

export const Counter = BadgeStory.bind({});
Counter.args = {
  bold: false,
  circle: true,
  text: '12',
  variant: 'primary',
};

export const Small = BadgeStory.bind({});
Small.args = {
  bold: false,
  circle: true,
  small: true,
  text: 'Default',
  variant: 'default',
};

export default {
  argTypes: {
    bold: { control: { type: 'boolean' } },
    circle: { control: { type: 'boolean' } },
    small: { control: { type: 'boolean' } },
    text: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'attention', 'important', 'new', 'primary'],
    },
  },
  component: BadgeStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Badge',
} as Meta;
