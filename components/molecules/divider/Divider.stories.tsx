import { Story } from '@storybook/react';
import docs from './Divider.docs.mdx';
import { Divider, DividerProps } from './Divider';

const DividerStory: Story<DividerProps> = (args: DividerProps) => <Divider classNames={['m-6']} {...args} />;

export const DividerWithText = DividerStory.bind({});
DividerWithText.args = {
  label: 'or',
};

export const DividerLineWithLightTint = DividerStory.bind({});
DividerLineWithLightTint.args = {
  label: '',
  tint: 'light',
};

export const DividerLineWithMediumTint = DividerStory.bind({});
DividerLineWithMediumTint.args = {
  label: '',
  tint: 'medium',
};

export const DividerLineWithDarkTint = DividerStory.bind({});
DividerLineWithDarkTint.args = {
  label: '',
  tint: 'dark',
};

export default {
  argTypes: {
    tint: { control: { type: 'select' }, options: ['light', 'medium', 'dark'] },
  },
  component: DividerStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Divider',
};
