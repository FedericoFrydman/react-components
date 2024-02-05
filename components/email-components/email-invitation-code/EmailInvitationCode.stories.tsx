import { Story, Meta } from '@storybook/react';
import { EmailInvitationCode, EmailInvitationCodeProps } from './EmailInvitationCode';

const EmailInvitationCodeStory: Story<EmailInvitationCodeProps> = (args: EmailInvitationCodeProps) => (
  <EmailInvitationCode {...args} />
);

export const Default = EmailInvitationCodeStory.bind({});

Default.args = {
  code: 'NY-123-4G8',
  text: 'This is your reference number for this consultation',
};

export default {
  argTypes: {},
  component: EmailInvitationCodeStory,
  title: 'Email Components/InvitationCode',
} as Meta;
