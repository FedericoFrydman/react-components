import { Story, Meta } from '@storybook/react';

import { RadioGroup, RadioGroupProps } from './RadioGroup';

import docs from './RadioGroup.docs.mdx';

const RadioGroupStory: Story<RadioGroupProps> = (args: RadioGroupProps) => {
  return <RadioGroup {...args} />;
};

export const Default = RadioGroupStory.bind({});
Default.args = {
  onClick: () => alert('Radio button was pressed'),
  options: [
    {
      name: 'Trial Defense',
      price: 14.95,
      value: 'Trial Defense',
    },

    { name: 'Gun Owner', price: 14.95, value: 'Gun Owner' },
    { name: 'Ride Share', price: 14.95, value: 'Ride Share' },
    {
      name: 'Home Business',
      price: 14.95,
      value: 'Home Business',
    },
    {
      name: 'Business Builder',
      price: 14.95,
      value: 'Business Builder',
    },
  ],
  title: 'Plan add-ons',
  value: 'Home Business',
};

export default {
  argTypes: {
    title: { control: 'text ' },
    value: { control: 'text ' },
  },
  component: RadioGroupStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/RadioGroup',
} as Meta;
