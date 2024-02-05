import { Story, Meta } from '@storybook/react';
import { EmailPanel, EmailPanelProps } from './EmailPanel';

const EmailPanelStory: Story<EmailPanelProps> = (args: EmailPanelProps) => <EmailPanel {...args} />;

export const TextPanel = EmailPanelStory.bind({});
TextPanel.args = {
  button: {
    label: 'Button',
    url: 'https://www.google.com',
  },
  text: (
    <>
      <b>When:</b> January 13th, 2021 4pm CT <br />
      <b>What:</b> Important Business Solutions updates, celebrating top Solutions producers and leaders, and an
      Advanced Training Webinar: “Effectively Cross-Selling Small Business and Employee Benefits in Groups”.
      <br />
      <b>Trainers:</b> Mike Riches <br />
    </>
  ),
  title: 'New 2021 Business Solutions Annual Cash Bonus Incentive',
};

export const LeftPanel = EmailPanelStory.bind({});
LeftPanel.args = {
  button: {
    label: 'Button',
    url: 'https://www.google.com',
  },
  image: 'https://www.legalshield.com/sites/default/files/image/2020-07/LogoLS.jpg',
  text: 'You are subscribed to messaging from LegalShield, One Prepaid Way, Ada, OK. 2020 LegalShield © All rights reserved',
  title: 'Section Title',
  variant: 'imageLeft',
};

export const RightPanel = EmailPanelStory.bind({});
RightPanel.args = {
  button: {
    label: 'Button',
    url: 'https://www.legalshield.com/',
  },
  image: 'https://www.legalshield.com/sites/default/files/image/2020-07/LogoLS.jpg',
  text: '10 Levels with a total of $115,800 in annual cash bonus potential. That’s an increase of almost $7,000 from last year’s top bonus opportunity! To sweeten the pot, we are introducing the Q1 DOUBLE ACCELERATOR bonus ON TOP of the annual cash bonus incentive. To help you jump start your business for the 2021, every level of the annual incentive bonus will be DOUBLED from January 1st – March 31st, 2021.',
  title: 'New 2021 Business Solutions Annual Cash Bonus Incentive',
  variant: 'imageRight',
};

export const ImagePanel = EmailPanelStory.bind({});
ImagePanel.args = {
  image: 'https://www.legalshield.com/sites/default/files/image/2020-07/LogoLS.jpg',
};

export const TextOnlyPanel = EmailPanelStory.bind({});
TextOnlyPanel.args = {
  text: (
    <>
      Hey Pilar,
      <br />
      <br />
      Legal issues can be confusing, complicated, and not to mention expensive. LegalShield gives you access to
      experienced attorneys that can help you with any legal issue for a small monthly fee.
    </>
  ),
};

export default {
  argTypes: {},
  component: EmailPanelStory,
  title: 'Email Components/Panel',
} as Meta;
