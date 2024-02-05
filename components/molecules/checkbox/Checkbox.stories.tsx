import { FC } from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

import docs from './Checkbox.docs.mdx';
import '../../assets/styles/utilities.scss';

const CheckboxStory: Story<CheckboxProps> = (args: CheckboxProps) => <Checkbox {...args} />;

export const Unchecked = CheckboxStory.bind({});
Unchecked.args = {
  name: 'unchecked-checkbox',
  onChange: () => alert('I was clicked!'),
  variant: 'filled',
};

export const CheckedFilled = CheckboxStory.bind({});
CheckedFilled.args = {
  checked: true,
  name: 'checkedFilled-checkbox',
  onChange: () => alert('I was clicked!'),
  variant: 'filled',
};

export const CheckedOutlined = CheckboxStory.bind({});
CheckedOutlined.args = {
  checked: true,
  name: 'checkedOutlined-checkbox',
  onChange: () => alert('I was clicked!'),
  variant: 'outlined',
};

export const MixedFilled = CheckboxStory.bind({});
MixedFilled.args = {
  checked: true,
  mixed: true,
  name: 'mixed-checkbox',
  onChange: () => alert('I was clicked!'),
  variant: 'filled',
};

export const MixedOutlined = CheckboxStory.bind({});
MixedOutlined.args = {
  checked: true,
  mixed: true,
  name: 'mixed-checkbox',
  onChange: () => alert('I was clicked!'),
  variant: 'outlined',
};

export const WithLabel = CheckboxStory.bind({});
WithLabel.args = {
  checked: true,
  name: 'mixed-checkbox',
  onChange: () => alert('I was clicked!'),
  rightLabel: 'Example Label',
};

export const WithOnClick = CheckboxStory.bind({});
WithOnClick.args = {
  onChange: () => alert('I was clicked!'),
  onClick: () => alert('I was clicked!'),
  rightLabel: 'I have an onClick fn',
};

export const DisabledFilled = CheckboxStory.bind({});
DisabledFilled.args = {
  checked: true,
  disabled: true,
  name: 'disable-checkbox',
  onChange: () => alert('I was clicked!'),
  rightLabel: 'Label Text',
  variant: 'filled',
};

export const DisabledOutlined = CheckboxStory.bind({});
DisabledOutlined.args = {
  checked: true,
  disabled: true,
  name: 'disable-checkbox',
  onChange: () => alert('I was clicked!'),
  rightLabel: 'Label Text',
  variant: 'outlined',
};

export const Error = CheckboxStory.bind({});
Error.args = {
  checked: true,
  error: true,
  name: 'error-checkbox',
  onChange: () => alert('I was clicked!'),
  rightLabel: 'Label Text',
};

export const Group: FC = () => (
  <div>
    <Checkbox
      onChange={() => alert('I was clicked!')}
      key={0}
      name="checkbox-one"
      checked={true}
      rightLabel="Jacob Jones"
      readOnly
    />
    <Checkbox
      onChange={() => alert('I was clicked!')}
      key={1}
      name="checkbox-two"
      rightLabel="Arlene McCoy"
      classNames={['mt-4']}
      readOnly
    />
    <Checkbox
      onChange={() => alert('I was clicked!')}
      key={2}
      name="checkbox-three"
      rightLabel="Devon Lane"
      classNames={['mt-4']}
      readOnly
    />
    <Checkbox
      onChange={() => alert('I was clicked!')}
      key={3}
      name="checkbox-four"
      rightLabel="Courtney Henry"
      classNames={['mt-4']}
      readOnly
    />
  </div>
);

export const Nested: FC = () => (
  <div style={{ display: 'flex' }}>
    <div className="mr-6">
      <Checkbox
        onChange={() => alert('I was clicked!')}
        name="checkbox-select"
        checked={true}
        rightLabel="Select all"
        readOnly
      />
      <div className="ml-4">
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-opt-one"
          rightLabel="Option 1"
          classNames={['mt-4']}
          checked={true}
          readOnly
        />
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-opt-two"
          rightLabel="Option 2"
          classNames={['mt-4']}
          checked={true}
          readOnly
        />
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-opt-three"
          rightLabel="Option 3"
          classNames={['mt-4']}
          checked={true}
          readOnly
        />
      </div>
    </div>
    <div>
      <Checkbox
        onChange={() => alert('I was clicked!')}
        name="checkbox-deselect"
        mixed={true}
        checked={true}
        rightLabel="Deselect all"
        readOnly
      />
      <div className="ml-4">
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-des-one"
          rightLabel="Option 1"
          classNames={['mt-4']}
          checked={true}
          readOnly
        />
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-des-two"
          rightLabel="Option 2"
          classNames={['mt-4']}
          readOnly
        />
        <Checkbox
          onChange={() => alert('I was clicked!')}
          name="checkbox-des-three"
          rightLabel="Option 3"
          classNames={['mt-4']}
          checked={true}
          readOnly
        />
      </div>
    </div>
  </div>
);

export default {
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
    leftLabel: { control: { type: 'text' } },
    mixed: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    rightLabel: { control: { type: 'text' } },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
  },
  component: CheckboxStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Form Fields/Checkbox Props',
} as Meta;
