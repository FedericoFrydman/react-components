import { Story } from '@storybook/react';

import { Select, SelectItem, SelectGroup, SelectProps, SelectLabel, SelectSeparator } from './Select';
import { FormField } from '../../organisms/form-field/FormField';
import docs from './Select.docs.mdx';

const ExampleSimpleList = (
  <>
    <SelectItem value="unitedstates" textValue="United States" />
    <SelectItem value="mexico" textValue="Mexico" />
    <SelectItem value="canada" textValue="Canada" />
  </>
);

const ExampleWithDisabledItem = (
  <>
    <SelectItem value="unitedstates">United States</SelectItem>
    <SelectItem value="mexico">Mexico</SelectItem>
    <SelectItem value="canada" disabled>
      Canada
    </SelectItem>
  </>
);

const ExampleWithGroups = (
  <>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="unitedstates">United States</SelectItem>
      <SelectItem value="mexico">Mexico</SelectItem>
      <SelectItem value="canada">Canada</SelectItem>
      <SelectItem value="costarica">Costa Rica</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>South America</SelectLabel>
      <SelectItem value="columbia">Columbia</SelectItem>
      <SelectItem value="Argentina">Argentina</SelectItem>
      <SelectItem value="chile">Chile</SelectItem>
      <SelectItem value="Brazil">Brazil</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="iceland">Iceland</SelectItem>
      <SelectItem value="sweden">Sweden</SelectItem>
      <SelectItem value="Croatia">Croatia</SelectItem>
      <SelectItem value="italy">Italy</SelectItem>
      <SelectItem value="france">France</SelectItem>
    </SelectGroup>
  </>
);

const SelectStory: Story<SelectProps> = (args: SelectProps) => {
  args.placeholder = args.placeholder || 'Select a country';

  return (
    <FormField label="Country" classNames={['px-5']}>
      <Select {...args}>{args.children}</Select>
    </FormField>
  );
};

export const Default = SelectStory.bind({});
Default.args = {
  children: ExampleSimpleList,
  id: 'base-select',
};

export const WithDisabledItem = SelectStory.bind({});
WithDisabledItem.args = {
  children: ExampleWithDisabledItem,
  id: 'disabled-select',
};

export const Grouped = SelectStory.bind({});
Grouped.args = {
  children: ExampleWithGroups,
};

export const Stretch = SelectStory.bind({});
Stretch.args = {
  children: ExampleWithGroups,
  stretch: true,
};

export const Invalid = SelectStory.bind({});
Invalid.args = {
  children: ExampleSimpleList,
  id: 'invalid-select',
  required: true,
  status: 'invalid',
};

export const Warning = SelectStory.bind({});
Warning.args = {
  children: ExampleSimpleList,
  id: 'warning-select',
  status: 'warning',
};

export const Success = SelectStory.bind({});
Success.args = {
  children: ExampleSimpleList,
  id: 'Success-select',
  status: 'valid',
};

export const Disabled = SelectStory.bind({});
Disabled.args = {
  children: ExampleSimpleList,
  disabled: true,
  id: 'disabled-select',
};

export default {
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    placeholder: { control: 'text' },
    status: { control: 'select', options: ['', 'valid', 'warning', 'invalid'] },
    stretch: { control: { type: 'boolean' } },
  },
  component: SelectStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/Select Props',
};
