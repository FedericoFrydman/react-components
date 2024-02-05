import { Story } from '@storybook/react';
import { Container } from '../container/Container';

import { TextArea, TextAreaProps } from './TextArea';
import docs from './TextArea.docs.mdx';

const TextAreaStory: Story<TextAreaProps> = (args: TextAreaProps) => (
  <Container classNames={['m-4']}>
    <TextArea rows={5} {...args} />
  </Container>
);

export const Default = TextAreaStory.bind({});
Default.args = {
  defaultValue: 'ABCDE',
  id: 'base-input',
  placeholder: 'Message',
  readOnly: false,
  rows: 5,
};

export const Invalid = TextAreaStory.bind({});
Invalid.args = {
  id: 'invalid-text-area',
  placeholder: 'Message',
  required: true,
  rows: 5,
  status: 'invalid',
};

export const Warning = TextAreaStory.bind({});
Warning.args = {
  id: 'warning-text-area',
  placeholder: 'Message',
  rows: 5,
  status: 'warning',
};

export const Success = TextAreaStory.bind({});
Success.args = {
  id: 'Success-text-area',
  placeholder: 'Message',
  rows: 5,
  status: 'valid',
};

export const Disabled = TextAreaStory.bind({});
Disabled.args = {
  disabled: true,
  id: 'disabled-text-area',
  placeholder: 'Message',
  rows: 5,
};

export const ReadOnly = TextAreaStory.bind({});
ReadOnly.args = {
  id: 'read-only-text-area',
  placeholder: 'Message',
  readOnly: true,
  rows: 5,
  value: 'Some read only value',
};

export default {
  argTypes: {
    format: { control: { type: 'text' } },
    status: { control: { type: 'select' }, options: ['', 'valid', 'warning', 'invalid'] },
    value: { control: { type: 'text' } },
  },
  component: TextAreaStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/Text Area Props',
};
