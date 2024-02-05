import { Story, Meta } from '@storybook/react';
import { ICON_NAMES } from '../../assets/icons';

import { Alert, AlertProps } from './Alert';

import docs from './Alert.docs.mdx';

const AlertStory: Story<AlertProps> = (args: AlertProps) => <Alert {...args} />;

export const DefaultDismissible = AlertStory.bind({});
DefaultDismissible.args = {
  children: 'Lorem ipsum dolor sit amet.',
  dismissible: true,
  onDismiss: () => {
    console.log('Dismiss clicked');
  },
  severity: 'default',
  title: 'Lorem ipsum dolor sit amet',
};

export const Default = AlertStory.bind({});
Default.args = {
  children: 'Example Content',
  severity: 'default',
  title: 'Lorem ipsum dolor sit amet',
};

export const Information = AlertStory.bind({});
Information.args = {
  children: 'Example Content',
  severity: 'information',
  title: 'Lorem ipsum dolor sit amet',
};

export const Success = AlertStory.bind({});
Success.args = {
  children: 'Example Content',
  severity: 'success',
  title: 'Lorem ipsum dolor sit amet',
};

export const Warning = AlertStory.bind({});
Warning.args = {
  children: 'Test',
  onDismiss: () => {
    console.log('test');
  },
  severity: 'warning',
  title: 'Lorem ipsum dolor sit amet',
};

export const Error = AlertStory.bind({});
Error.args = {
  children: 'Example Content',
  severity: 'error',
  title: 'Lorem ipsum dolor sit amet',
};

export default {
  argTypes: {
    bold: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
    dismissible: { control: { type: 'boolean' } },
    icon: { control: { type: 'select' }, options: ICON_NAMES },
    severity: {
      control: { type: 'select' },
      options: ['default', 'information', 'success', 'warning', 'error'],
    },
    title: { control: { type: 'text' } },
  },
  component: AlertStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Alert',
} as Meta;
