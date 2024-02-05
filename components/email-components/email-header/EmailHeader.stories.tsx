import { Story, Meta } from '@storybook/react';
import { EmailHeader, EmailHeaderProps } from './EmailHeader';

const EmailHeaderStory: Story<EmailHeaderProps> = (args: EmailHeaderProps) => <EmailHeader {...args} />;

export const WithDate = EmailHeaderStory.bind({});
WithDate.args = {
  brand: 'legalshield',
  date: 'Feb 9, 2021',
  lang: 'en-ca',
};

export const WithoutDate = EmailHeaderStory.bind({});
WithoutDate.args = {
  brand: 'legalshield',
  lang: 'en-us',
};

export default {
  argTypes: {},
  component: EmailHeaderStory,
  title: 'Email Components/Header',
} as Meta;
