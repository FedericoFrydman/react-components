import { Story, Meta } from '@storybook/react';
import { SettingsExample } from './Settings';

export default {
  argTypes: {},
  component: SettingsExample,
  title: 'Page Layouts/Settings',
} as Meta;

const Template: Story = () => <SettingsExample />;

export const Default = Template.bind({});
