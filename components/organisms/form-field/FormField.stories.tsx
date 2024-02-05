import { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { FormField, FormFieldProps } from './FormField';

import docs from './FormField.docs.mdx';
import { Input } from '../../molecules/input/Input';
import { Checkbox } from '../../molecules/checkbox/Checkbox';
import { Radio } from '../../molecules/radio/Radio';
import { Select, SelectItem } from '../../molecules/select/Select';
import { TextArea } from '../../atoms/text-area/TextArea';
import { Container } from '../../atoms/container/Container';
import { MultiSelect, SelectOption } from '../../molecules/multi-select/MultiSelect';

const options: SelectOption[] = [
  {
    label: 'United States',
    value: 'US',
  },
  {
    label: 'Germany',
    value: 'DE',
  },
  {
    label: 'France',
    value: 'FR',
  },
];

const FormFieldStory: Story<FormFieldProps> = (args: FormFieldProps) => (
  <Container classNames={['m-4']}>
    <FormField {...args} />
  </Container>
);

export const TextField = FormFieldStory.bind({});
TextField.args = {
  children: <Input placeholder="First Name" name="name" />,
  id: 'base-input',
  label: 'First Name',
};

export const NumberField = FormFieldStory.bind({});
NumberField.args = {
  children: <Input placeholder="0" name="number" type="number" />,
  id: 'number-input',
  label: 'Number',
};

export const TextAreaField = FormFieldStory.bind({});
TextAreaField.args = {
  children: <TextArea placeholder="Message" rows={5} />,
  id: 'base-text-area',
  label: 'Message',
};

export const SearchField = FormFieldStory.bind({});
SearchField.args = {
  children: <Input placeholder="Search" name="search-input" type="search" />,
  id: 'search-input',
  label: 'Search',
};

export const TelField = FormFieldStory.bind({});
TelField.args = {
  children: <Input type="tel" format="### ###-####" placeholder="123-456-789" />,
  id: 'input-mask',
  label: 'Tel',
};

export const PasswordField = FormFieldStory.bind({});
PasswordField.args = {
  children: <Input type="password" placeholder="********" />,
  id: 'input-password',
  label: 'Password',
};

export const CurrencyField = FormFieldStory.bind({});
CurrencyField.args = {
  children: <Input type="currency" />,
  id: 'input-currency',
  label: 'Currency',
};

export const SelectField = FormFieldStory.bind({});
SelectField.args = {
  children: (
    <Select placeholder="Select a country">
      <SelectItem textValue="United States" value="usa" />
      <SelectItem textValue="Canada" value="canada" />
      <SelectItem textValue="Mexico" value="mexico" />
    </Select>
  ),
  id: 'base-select',
  label: 'Country',
};

export const MultiSelectField = FormFieldStory.bind({});
MultiSelectField.args = {
  children: <MultiSelect placeholder="Select a country" options={options} />,
  id: 'base-multi-select',
  label: 'Country',
};

export const RadioField = FormFieldStory.bind({});
RadioField.args = {
  children: <Radio rightLabel="Radio Label" />,
  id: 'base-radio',
};

export const CheckboxField = FormFieldStory.bind({});
CheckboxField.args = {
  children: <Checkbox rightLabel="Checkbox Label" name="checkbox-field" readOnly />,
  id: 'base-checkox',
};

export const InputRequired = FormFieldStory.bind({});
InputRequired.args = {
  children: <Input type="text" placeholder="Required example" required />,
  id: 'input-required',
  label: 'Input required label',
  required: true,
};

export const Disabled = FormFieldStory.bind({});
Disabled.args = {
  children: <Input type="text" placeholder="Disabled input" disabled={true} />,
  id: 'input-disabled',
  label: 'Disabled input',
};

export const ReadOnly = FormFieldStory.bind({});
ReadOnly.args = {
  children: <Input type="text" value="Some read only value" readOnly={true} placeholder="Some read only value" />,
  id: 'input-read-only',
  label: 'Read only',
};

export const Invalid = FormFieldStory.bind({});
Invalid.args = {
  children: <Input placeholder="First Name" status="invalid" />,
  id: 'invalid-input',
  label: 'First Name',
  status: 'invalid',
  validationHint: 'This field has an error',
};

export const Warning = FormFieldStory.bind({});
Warning.args = {
  children: <Input placeholder="First Name" status="warning" />,
  id: 'warning-input',
  label: 'First Name',
  status: 'warning',
  validationHint: 'Warning message',
};

export const Success = FormFieldStory.bind({});
Success.args = {
  children: <Input placeholder="First Name" status="valid" />,
  id: 'success-input',
  label: 'First Name',
  status: 'valid',
  validationHint: 'Success message',
};

export const Description = FormFieldStory.bind({});
Description.args = {
  children: <Input placeholder="First Name" />,
  description: 'This field has a description',
  id: 'description-input',
  label: 'First Name',
};

export const Date: FC = () => (
  <Container classNames={['m-4']}>
    <FormField id="input--birth-date--month" label="Month">
      <Input placeholder="MM" type="number" />
    </FormField>
    <FormField id="input--birth-date--day" label="Day">
      <Input placeholder="DD" type="number" />
    </FormField>
    <FormField id="input--birth-date--year" label="Year">
      <Input placeholder="YYYY" type="number" />
    </FormField>
  </Container>
);

export default {
  argTypes: {
    description: { control: 'text' },
    label: { control: 'text' },
    leftLabel: { control: 'text' },
    noMargin: { control: 'boolean' },
    required: { control: 'boolean' },
    rightLabel: { control: 'text' },
    status: { control: 'select', options: ['', 'valid', 'warning', 'invalid'] },
    stretch: { control: 'boolean' },
    validationHint: { control: 'text' },
  },
  component: FormFieldStory,
  parameters: {
    docs: { page: docs },
  },
  subcomponents: {
    Checkbox,
    Input,
    Radio,
    Select,
  },
  title: 'Controls/Form Fields',
} as Meta;
