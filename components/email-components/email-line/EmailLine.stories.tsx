import { Story, Meta } from '@storybook/react';
import { EmailLine, EmailLineProps } from './EmailLine';

const EmailLineStory: Story<EmailLineProps> = (args: EmailLineProps) => <EmailLine {...args} />;

export const HorizontalLine = EmailLineStory.bind({});

export default {
  argTypes: {},
  component: EmailLineStory,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  title: 'Email Components/Line',
} as Meta;
