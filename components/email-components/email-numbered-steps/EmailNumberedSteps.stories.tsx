import { Story, Meta } from '@storybook/react';
import { EmailNumberedSteps, EmailNumberedStepsProps } from './EmailNumberedSteps';

const EmailNumberedStepsStory: Story<EmailNumberedStepsProps> = (args: EmailNumberedStepsProps) => (
  <EmailNumberedSteps {...args} />
);

export const Default = EmailNumberedStepsStory.bind({});

Default.args = {
  items: [
    {
      description: (
        <>
          Please <a href="#">download</a> and begin filling it out. The will questionnaire will give your lawyer all the
          information they need to complete your will.
        </>
      ),
      title: 'Action Step',
    },
    {
      description: (
        <>
          Please <a href="#">download</a> and begin filling it out. The will questionnaire will give your lawyer all the
          information they need to complete your will.
        </>
      ),
      title: 'Action Step',
    },
    {
      description: (
        <>
          Please <a href="#">download</a> and begin filling it out. The will questionnaire will give your lawyer all the
          information they need to complete your will.
        </>
      ),
      title: 'Action Step',
    },
  ],
};

export default {
  argTypes: {},
  component: EmailNumberedStepsStory,
  title: 'Email Components/NumberedSteps',
} as Meta;
