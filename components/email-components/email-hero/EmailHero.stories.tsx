import { Story, Meta } from '@storybook/react';
import { EmailHero, EmailHeroProps } from './EmailHero';

const EmailHeroStory: Story<EmailHeroProps> = (args: EmailHeroProps) => <EmailHero {...args} />;

export const Default = EmailHeroStory.bind({});
Default.args = {
  copy: 'As part of your LegalShield Membership, we’ll keep you up to date on legal matters in the news.',
  title: 'Headline',
  variant: 'default',
};

export const Center = EmailHeroStory.bind({});
Center.args = {
  copy: 'As part of your LegalShield Membership, we’ll keep you up to date on legal matters in the news.',
  title: 'Headline',
  variant: 'center',
};

export const HugeHero = EmailHeroStory.bind({});
HugeHero.args = {
  button: true,
  copy: 'Welcome to LegalShield! There are just a couple more steps to finish creating your account to start your legal protection',
  labelBtn: 'Activate my account',
  title: 'Hello Greg,',
  variant: 'huge-hero',
};

export const SmallHero = EmailHeroStory.bind({});
SmallHero.args = {
  copy: 'An estate planning request has been opened for you. Your law firm will be contacting you 8:30 am - 11:00today/tomorrow/Monday], keep a lookout for their call. ',
  title: 'Greg, your estate planning request has been received',
  variant: 'small-hero',
};

export const BackgroundImage = EmailHeroStory.bind({});
BackgroundImage.args = {
  copy: 'As part of your LegalShield Membership, we’ll keep you up to date on legal matters in the news.',
  imgBkgLink: 'https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg',
  title: 'The weekly Business Solutions Message is in!',
  variant: 'center',
};

export default {
  argTypes: {},
  component: EmailHeroStory,
  title: 'Email Components/Hero',
} as Meta;
