import { Story, Meta } from '@storybook/react';
import { SocialIconProps, SocialIcons } from './SocialIcons';

const SocialIconsStory: Story<SocialIconProps> = (args: SocialIconProps) => <SocialIcons {...args} />;

export const Default = SocialIconsStory.bind({});

Default.args = {
  urls: {
    facebook: 'https://www.google.com',
    instagram: 'https://www.google.com',
    linkedin: 'https://www.google.com',
    twitter: 'https://www.google.com',
  },
};

export default {
  argTypes: {},
  component: SocialIconsStory,
  title: 'Email Components/Social Icons',
} as Meta;
