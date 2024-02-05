import { Story, Meta } from '@storybook/react';

import { AddressForm, AddressFormProps } from './AddressForm';

const AddressFormStory: Story<AddressFormProps> = (args: AddressFormProps) => <AddressForm {...args} />;

export const Default = AddressFormStory.bind({});

export default {
  argTypes: {
    showCountry: { control: { type: 'boolean' } },
  },
  component: AddressFormStory,
  parameters: {},
  title: 'Page Layouts/AddressForm',
} as Meta;
