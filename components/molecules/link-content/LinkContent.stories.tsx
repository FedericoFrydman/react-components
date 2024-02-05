import { Story, Meta } from '@storybook/react';

import { LinkContent, LinkContentProps } from './LinkContent';
import { ICON_NAMES, ICON_COLORS_ALL } from '../../../components/assets/icons';

const LinkContentStory: Story<LinkContentProps> = (args: LinkContentProps) => <LinkContent {...args} />;

export const Default = LinkContentStory.bind({});
Default.args = {
  text: 'This is link content',
};

export default {
  argTypes: {
    active: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    divider: { control: { type: 'boolean' } },
    dividerTop: { control: { type: 'boolean' } },
    dynamicPadding: {
      control: { type: 'select' },
      options: ['none', 'left', 'right'],
    },
    icon: {
      control: { type: 'select' },
      options: ICON_NAMES,
    },
    iconLinkColor: {
      control: { type: 'select' },
      options: ICON_COLORS_ALL,
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['none', 'left', 'right'],
    },
    iconSize: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium-small', 'medium', 'large', 'xlarge'],
    },
    linkContentStyle: {
      control: { type: 'select' },
      options: ['link', 'menu'],
    },
    margin: { control: { type: 'boolean' } },
    padding: { control: { type: 'boolean' } },
    text: {
      control: { type: 'text' },
    },
    useBadge: { control: { type: 'boolean' } },
  },
  component: LinkContentStory,
  title: 'Controls/LinkContent',
} as Meta;
