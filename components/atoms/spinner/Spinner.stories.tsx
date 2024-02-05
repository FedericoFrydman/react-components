import { Story, Meta } from '@storybook/react';

import { Spinner, SpinnerProps } from './Spinner';

import docs from './Spinner.docs.mdx';

const SpinnerStory: Story<SpinnerProps> = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = SpinnerStory.bind({});
Default.args = {
  spinnerSize: 'medium',
};

export const WithBlocking = SpinnerStory.bind({});
WithBlocking.args = {
  blocking: true,
};

export default {
  argTypes: {
    blocking: { control: 'boolean' },
    color: { control: 'select', options: ['neutral', 'brand'] },
    spinnerSize: { control: 'select', options: ['small', 'medium', 'large', 'xlarge'] },
  },
  component: SpinnerStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Spinner',
} as Meta;
