/* eslint-disable sort-keys-fix/sort-keys-fix */

import { Story, Meta } from '@storybook/react';
import { ProfilePicture, ProfilePictureProps } from './ProfilePicture';
import docs from './ProfilePicture.docs.mdx';

const ProfilePictureStory: Story<ProfilePictureProps> = (args: ProfilePictureProps) => <ProfilePicture {...args} />;

export const Default = ProfilePictureStory.bind({});
Default.args = {};

export default {
  argTypes: {
    allowDelete: { control: { type: 'boolean' } },
    allowEdit: { control: { type: 'boolean' } },
    allowUpdate: { control: { type: 'boolean' } },
    avatarHeight: { control: { type: 'number' } },
    avatarWidth: { control: { type: 'number' } },
    cropAspect: { control: { type: 'number' } },
    maxZoom: { control: { type: 'number' } },
    modalImageHeight: { control: { type: 'text' } },
    modalImageWidth: { control: { type: 'text' } },
    profileImageUrl: { control: { type: 'text' } },
    shape: {
      control: { type: 'select' },
      options: ['rect', 'round'],
    },
    showGrid: { control: { type: 'boolean' } },
    sliderWidth: { control: { type: 'text' } },
  },
  component: ProfilePictureStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/ProfilePicture',
} as Meta;
