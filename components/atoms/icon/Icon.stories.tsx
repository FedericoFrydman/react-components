import { Story, Meta } from '@storybook/react';

import { Icon, IconProps } from './Icon';

import docs from './Icon.docs.mdx';
import { ICON_NAMES } from '../../../components/assets/icons';
import { ICON_COLORS_V2 } from '../../../components/assets/icons/icons-v2';
import { Container } from '../container/Container';

export const Default: Story<IconProps> = (args: IconProps) => (
  <Container classNames={['m-3']}>
    <Icon name="action_add" {...args} />
  </Container>
);

export const Clickable = Default.bind({});
Clickable.args = {
  name: 'action_add',
  onClick: () => alert('Add icon clicked'),
};

export const ExtraLargeIconWithBadge = Default.bind({});
ExtraLargeIconWithBadge.args = {
  name: 'action_add',
  size: 'xlarge',
  useBadge: true,
};

export const LargeIconWithBadge = Default.bind({});
LargeIconWithBadge.args = {
  name: 'action_add',
  size: 'large',
  useBadge: true,
};

export const MediumIconWithBadge = Default.bind({});
MediumIconWithBadge.args = {
  name: 'action_add',
  size: 'medium',
  useBadge: true,
};

export const SmallIconWithBadge = Default.bind({});
SmallIconWithBadge.args = {
  name: 'action_add',
  size: 'small',
  useBadge: true,
};

export const XsmallIconWithBadge = Default.bind({});
XsmallIconWithBadge.args = {
  name: 'action_add',
  size: 'xsmall',
  useBadge: true,
};

export default {
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ICON_COLORS_V2,
    },
    name: { control: { type: 'select' }, options: ICON_NAMES },
    noTransition: { control: { type: 'boolean' } },
    size: { control: { type: 'select' }, options: ['xsmall', 'small', 'medium-small', 'medium', 'large', 'xlarge'] },
    useBadge: { control: { type: 'boolean' } },
  },
  component: Default,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Icon',
} as Meta;
