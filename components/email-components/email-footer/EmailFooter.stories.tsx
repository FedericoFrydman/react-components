import { Story, Meta } from '@storybook/react';
import { EmailFooter, EmailFooterProps } from './EmailFooter';

const EmailFooterStory: Story<EmailFooterProps> = (args: EmailFooterProps) => <EmailFooter {...args} />;

export const FullFooter = EmailFooterStory.bind({});
FullFooter.args = {
  links: [
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
    {
      label: 'Link',
      url: 'https://www.google.com',
    },
  ],
  text: 'You are subscribed to messaging from LegalShield, One Prepaid Way, Ada, OK. 2020 LegalShield © All rights reserved',
  urls: {
    facebook: 'https://www.google.com',
    instagram: 'https://www.google.com',
    linkedin: 'https://www.google.com',
    twitter: 'https://www.google.com',
  },
};

export const TextOnly = EmailFooterStory.bind({});

TextOnly.args = {
  text: 'You are subscribed to messaging from LegalShield, One Prepaid Way, Ada, OK. 2020 LegalShield © All rights reserved',
};

export default {
  argTypes: {},
  component: EmailFooterStory,
  title: 'Email Components/Footer',
} as Meta;
