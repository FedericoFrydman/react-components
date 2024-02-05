import { Story } from '@storybook/react';

import { MultiSelect, MultiSelectProps, SelectOption } from './MultiSelect';
import { FormField } from '../../organisms/form-field/FormField';
import docs from './MultiSelect.docs.mdx';

const options: SelectOption[] = [
  {
    label: 'United States',
    value: 'unitedstates',
  },
  {
    disabled: true,
    label: 'Germany',
    value: 'germany',
  },
  {
    label: 'France',
    value: 'france',
  },
  {
    disabled: true,
    label: 'Costa Rica',
    value: 'costarica',
  },
  {
    label: 'England',
    value: 'england',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Iceland',
    value: 'iceland',
  },
  {
    label: 'Scotland',
    value: 'scotland',
  },
];

const MultiSelectStory: Story<MultiSelectProps> = (args: MultiSelectProps) => {
  return (
    <FormField id={args.id} label="Some label:" classNames={['px-5']}>
      <MultiSelect {...args} options={options} onChange={() => null} />
    </FormField>
  );
};

export const Default = MultiSelectStory.bind({});
Default.args = {
  id: 'base-select',
};

export const MultipleChips = MultiSelectStory.bind({});
MultipleChips.args = {
  displayFormat: 'chips',
  placeholder: 'Select your country',
  placeholderValue: '',
};

export const MultipleText = MultiSelectStory.bind({});
MultipleText.args = {
  displayFormat: 'text',
  placeholder: 'Select your country',
  placeholderValue: '',
};

export const WithPlaceholder = MultiSelectStory.bind({});
WithPlaceholder.args = {
  id: 'placeholder-select',
  placeholder: 'Select your country',
  placeholderValue: '',
};

export const Invalid = MultiSelectStory.bind({});
Invalid.args = {
  id: 'invalid-select',
  required: true,
  status: 'invalid',
};

export const Warning = MultiSelectStory.bind({});
Warning.args = {
  id: 'warning-select',
  status: 'warning',
};

export const Success = MultiSelectStory.bind({});
Success.args = {
  id: 'Success-select',
  status: 'valid',
};

export const Disabled = MultiSelectStory.bind({});
Disabled.args = {
  disabled: true,
  id: 'disabled-select',
};

export default {
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    displayFormat: { control: 'select', options: ['', 'text', 'chips'] },
    placeholder: { control: 'text' },
    placeholderValue: { control: 'text' },
    status: { control: 'select', options: ['', 'valid', 'warning', 'invalid'] },
  },
  component: MultiSelectStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/MultiSelect Props',
};
