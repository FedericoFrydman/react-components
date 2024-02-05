import { Story, Meta } from '@storybook/react';

import { Avatar, AvatarProps } from './Avatar';

import docs from './Avatar.docs.mdx';

const AvatarStory: Story<AvatarProps> = (args: AvatarProps) => <Avatar {...args} />;

export const UserIcon = AvatarStory.bind({});
UserIcon.args = {
  avatarType: 'user-icon',
};

export const UserPhoto = AvatarStory.bind({});
UserPhoto.args = {
  avatarType: 'user-photo',
  imageURL: 'https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg',
};

export const UserInitials = AvatarStory.bind({});
UserInitials.args = {
  avatarType: 'user-initials',
  userInitials: 'AB',
};

export default {
  argTypes: {
    avatarSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    avatarType: {
      control: { type: 'select' },
      options: ['user-photo', 'user-icon', 'user-initials'],
    },
    imageURL: {
      control: { type: 'text' },
    },
    userInitials: {
      control: { type: 'text' },
    },
  },
  component: AvatarStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Avatar',
} as Meta;
