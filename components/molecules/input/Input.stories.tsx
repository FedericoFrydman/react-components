import { FormEvent, useState } from 'react';
import { Story } from '@storybook/react';

import { Input, InputProps } from './Input';
import docs from './Input.docs.mdx';
import { Container } from '../../../components/atoms/container/Container';
import { ICON_COLORS_V2, ICON_NAMES } from '../../../components/assets/icons';
import { Icon } from 'components/atoms/icon/Icon';

const InputStory: Story<InputProps> = (args: InputProps) => {
  const [, setValue] = useState(args.value);
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };

  return (
    <Container classNames={['m-4']}>
      <Input {...args} onChange={handleOnChange} />
    </Container>
  );
};

export const Default = InputStory.bind({});
Default.args = {
  autoCapitalize: 'words',
  defaultValue: 'Joe',
  disabled: false,
  id: 'base-input',
  name: 'base-input',
  placeholder: 'First Name',
  readOnly: false,
};

export const TypeColor = InputStory.bind({});
TypeColor.args = {
  disabled: false,
  id: 'input-color',
  name: 'input-color',
  type: 'color',
};
export const TypeDate = InputStory.bind({});
TypeDate.args = {
  disabled: false,
  id: 'input-date',
  name: 'input-date',
  type: 'date',
};
export const TypeDateTime = InputStory.bind({});
TypeDateTime.args = {
  disabled: false,
  id: 'input-datetime',
  name: 'input-datetime',
  type: 'datetime',
};
export const TypeEmail = InputStory.bind({});
TypeEmail.args = {
  disabled: false,
  id: 'input-email',
  name: 'input-email',
  type: 'email',
};
export const TypeMonth = InputStory.bind({});
TypeMonth.args = {
  disabled: false,
  id: 'input-month',
  name: 'input-month',
  type: 'month',
};
export const TypeNumber = InputStory.bind({});
TypeNumber.args = {
  disabled: false,
  id: 'input-number',
  name: 'input-number',
  type: 'number',
};
export const TelReadOnly = InputStory.bind({});
TelReadOnly.args = {
  id: 'phonenumber-input-readonly',
  placeholder: '1234567890',
  readOnly: true,
};
export const TypePassword = InputStory.bind({});
TypePassword.args = {
  disabled: false,
  id: 'input-password',
  name: 'input-password',
  type: 'password',
};
export const TypeRange = InputStory.bind({});
TypeRange.args = {
  disabled: false,
  id: 'input-range',
  name: 'input-range',
  type: 'range',
};
export const TypeSearch = InputStory.bind({});
TypeSearch.args = {
  disabled: false,
  id: 'input-search',
  name: 'input-search',
  type: 'search',
};
export const TypeTel = InputStory.bind({});
TypeTel.args = {
  disabled: false,
  id: 'input-tel',
  name: 'input-tel',
  type: 'tel',
};
export const TypeText = InputStory.bind({});
TypeText.args = {
  disabled: false,
  id: 'input-text',
  name: 'input-text',
  type: 'text',
};
export const TypeTime = InputStory.bind({});
TypeTime.args = {
  disabled: false,
  id: 'input-time',
  name: 'input-time',
  type: 'time',
};
export const TypeURL = InputStory.bind({});
TypeURL.args = {
  disabled: false,
  id: 'input-url',
  name: 'input-url',
  type: 'url',
};
export const TypeWeek = InputStory.bind({});
TypeWeek.args = {
  disabled: false,
  id: 'input-week',
  name: 'input-week',
  type: 'week',
};

export const TypeCurrency = InputStory.bind({});
TypeCurrency.args = {
  id: 'currency-input',
  type: 'currency',
};

export const Numeric = InputStory.bind({});
Numeric.args = {
  id: 'numeric-input',
  name: 'numeric-input',
  placeholder: '0',
  type: 'number',
};

export const ValidationStatusInvalid = InputStory.bind({});
ValidationStatusInvalid.args = {
  id: 'invalid-input',
  name: 'invalid-input',
  placeholder: 'Invalid input',
  required: true,
  status: 'invalid',
  value: 'Example Text',
};

export const ValidationStatusWarning = InputStory.bind({});
ValidationStatusWarning.args = {
  id: 'warning-input',
  name: 'warning-input',
  placeholder: 'Warning input',
  status: 'warning',
  value: 'Example Text',
};

export const ValidationStatusSuccess = InputStory.bind({});
ValidationStatusSuccess.args = {
  id: 'Success-input',
  name: 'Success-input',
  placeholder: 'Success input',
  status: 'valid',
  value: 'Example Text',
};

export const Disabled = InputStory.bind({});
Disabled.args = {
  disabled: true,
  id: 'disabled-input',
  name: 'disabled-input',
  placeholder: 'Disabled input',
};

export const ReadOnly = InputStory.bind({});
ReadOnly.args = {
  id: 'read-only-input',
  name: 'read-only-input',
  placeholder: 'Read only input',
  readOnly: true,
  value: 'Some read only value',
};

export const CustomIconLeft = InputStory.bind({});
CustomIconLeft.args = {
  iconLeft: <Icon name="interface_shopping_bag_02" />,
  id: 'read-only-input',
  name: 'read-only-input',
  placeholder: 'Some read only placeholder',
  readonly: false,
};

export const CustomIconRight = InputStory.bind({});
CustomIconRight.args = {
  iconRight: <Icon name="interface_shopping_bag_02" />,
  id: 'read-only-input',
  name: 'read-only-input',
  placeholder: 'Some read only placeholder',
  readonly: false,
};

export default {
  argTypes: {
    format: { control: { type: 'text' } },
    icon: { control: { type: 'select' }, options: ICON_NAMES },
    iconColor: {
      control: {
        type: 'select',
      },
      options: ICON_COLORS_V2,
    },
    placeholder: { control: { type: 'text' } },
    prefix: { control: { type: 'text' } },
    status: { control: { type: 'select' }, options: ['', 'valid', 'warning', 'invalid'] },
    type: {
      control: {
        options: [
          'color',
          'date',
          'datetime-local',
          'email',
          'hidden',
          'month',
          'number',
          'password',
          'range',
          'search',
          'tel',
          'text',
          'time',
          'url',
          'week',
          'currency',
        ],
        type: 'select',
      },
    },
    value: { control: { type: 'text' } },
  },
  component: InputStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/Input Props',
};
