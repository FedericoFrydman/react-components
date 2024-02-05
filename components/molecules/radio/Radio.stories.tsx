import { Story, Meta } from '@storybook/react';

import { Radio, RadioProps } from './Radio';

import docs from './Radio.docs.mdx';

const RadioStory: Story<RadioProps> = (args: RadioProps) => {
  return <Radio {...args} readOnly />;
};

export const Default = RadioStory.bind({});
Default.args = {
  disabled: false,
  rightLabel: 'Radio Label',
};

export const Selected = RadioStory.bind({});
Selected.args = {
  checked: true,
  rightLabel: 'Selected',
};

export const Disabled = RadioStory.bind({});
Disabled.args = {
  disabled: true,
  rightLabel: 'Disabled',
};

export default {
  argTypes: {
    leftLabel: { control: 'text' },
    rightLabel: { control: 'text' },
  },
  component: RadioStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/Radio Props',
} as Meta;
