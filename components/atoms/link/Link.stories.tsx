import { Story, Meta } from '@storybook/react';

import { Link, LinkProps } from './Link';
import docs from './Link.docs.mdx';
import { ICON_NAMES } from '../../../components/assets/icons';

const LinkStory: Story<LinkProps> = (args: LinkProps) => <Link {...args} />;

export const Default = LinkStory.bind({});
Default.args = {
  href: '',
  text: 'This is a link',
};

export default {
  argTypes: {
    decoration: { control: { type: 'boolean' } },
    icon: { control: { type: 'select' }, options: ICON_NAMES },
    iconPosition: { control: { type: 'select' }, options: ['left', 'right'] },
    noDecoration: { control: { type: 'boolean' } },
    noMargin: { control: { type: 'boolean' } },
    target: { control: { type: 'select' }, options: ['_blank', '_self', '_parent', '_top'] },
    text: { control: { type: 'text' } },
    textSize: { control: { type: 'select' }, options: ['small', 'medium', 'large', 'extra-large'] },
    textWeight: { control: { type: 'select' }, options: ['normal', 'semibold'] },
  },
  component: LinkStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Navigation/Link',
} as Meta;
