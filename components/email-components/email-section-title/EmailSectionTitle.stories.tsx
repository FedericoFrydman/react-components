import { Story, Meta } from '@storybook/react';
import { EmailSectionTitle, EmailSectionTitleProps } from './EmailSectionTitle';

const EmailSectionTitleStory: Story<EmailSectionTitleProps> = (args: EmailSectionTitleProps) => (
  <EmailSectionTitle {...args} />
);

export const NoSubheading = EmailSectionTitleStory.bind({});
NoSubheading.args = {
  heading: 'Check out all the incentives you have access to as a Business Solutions Associate!  🎉',
};

export const WithSubheading = EmailSectionTitleStory.bind({});
WithSubheading.args = {
  heading: 'New Small Business Resources',
  subheading: 'Check out all the incentives you have access to as a Business Solutions Associate!',
};

export default {
  argTypes: {},
  component: EmailSectionTitleStory,
  title: 'Email Components/SectionTitle',
} as Meta;
