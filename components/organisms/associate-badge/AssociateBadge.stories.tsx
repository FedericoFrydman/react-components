import { Story, Meta } from '@storybook/react';
import { AssociateBadge, AssociateBadgeProps } from './AssociateBadge';
import docs from './AssociateBadge.docs.mdx';

const AssociateBadgeStory: Story<AssociateBadgeProps> = (args: AssociateBadgeProps) => (
  <AssociateBadge {...args}></AssociateBadge>
);

export const Default = AssociateBadgeStory.bind({});

Default.args = {
  avatarUrl: 'https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg',
  name: 'Sherry Swedenborg',
  onClick: () => console.log('onClick'),
  onMessageClick: () => console.log('onMessageClick'),
  onPhoneClick: () => console.log('onPhoneClick'),
  phone: '(238) 432-6343',
  title: 'LegalShield Independent Associate',
};

export default {
  argTypes: {
    avatarUrl: { control: 'text' },
    name: { control: 'text' },
    phone: { control: 'text' },
    title: { control: 'text' },
    truncationLength: { control: 'number' },
  },
  component: AssociateBadgeStory,
  parameters: {
    docs: { iframeHeight: 200, inlineStories: false, page: docs },
  },
  title: 'Layout/AssociateBadge',
} as Meta;
