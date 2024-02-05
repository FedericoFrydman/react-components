import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';
import docs from './Button.docs.mdx';
import { Container } from '../../../components/atoms/container/Container';
import { ICON_NAMES } from '../../../components/assets/icons';

const ButtonStory: Story<ButtonProps> = (args: ButtonProps) => (
  <Container classNames={['p-3']}>
    <Button {...args} />
  </Container>
);

export const Primary = ButtonStory.bind({});
Primary.args = {
  destructive: false,
  label: 'Primary Button',
  onClick: () => console.log('primary test'),
  pplsiEventId: '123',
  variant: 'primary',
};

export const Secondary = ButtonStory.bind({});
Secondary.args = {
  destructive: false,
  label: 'Secondary Button',
  onClick: () => console.log('secondary test'),
  variant: 'secondary',
};

export const Tertiary = ButtonStory.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  onClick: () => console.log('tertiary test'),
  variant: 'tertiary',
};

export const PrimaryDestructive = ButtonStory.bind({});
PrimaryDestructive.args = {
  destructive: true,
  label: 'Primary Destructive',
  variant: 'primary',
};

export const SecondaryDestructive = ButtonStory.bind({});
SecondaryDestructive.args = {
  destructive: true,
  label: 'Secondary Destructive',
  variant: 'secondary',
};

export const TertiaryDestructive = ButtonStory.bind({});
TertiaryDestructive.args = {
  destructive: true,
  label: 'Tertiary Destructive',
  variant: 'tertiary',
};

export const IconButton = ButtonStory.bind({});
IconButton.args = {
  iconColor: 'P200',
  iconLeft: 'action_add',
  variant: 'secondary',
};

export const BtnWIconLeft = ButtonStory.bind({});
BtnWIconLeft.args = {
  iconLeft: 'action_add',
  label: 'Primary',
  variant: 'primary',
};

export const BtnWIconRight = ButtonStory.bind({});
BtnWIconRight.args = {
  iconRight: 'action_add',
  label: 'Primary',
  variant: 'primary',
};

export const BtnWColoredIconLeft = ButtonStory.bind({});
BtnWColoredIconLeft.args = {
  iconColor: 'R300',
  iconLeft: 'action_add',
  label: 'Colored icon',
  variant: 'secondary',
};

export const Stretch = ButtonStory.bind({});
Stretch.args = {
  label: 'Stretch Button',
  stretch: true,
  variant: 'secondary',
};

export default {
  argTypes: {
    destructive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconLeft: { control: { type: 'select' }, options: ICON_NAMES },
    iconRight: { control: { type: 'select' }, options: ICON_NAMES },
    iconSize: {
      control: { type: 'select' },
      options: ['xsmall', 'small', 'medium-small', 'medium', 'large', 'xlarge'],
    },
    label: { control: { type: 'text' } },
    shape: { control: { type: 'select' }, options: ['rectangular', 'round'] },
    stretch: { control: { type: 'boolean' } },
    textSize: {
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium', 'large', 'extra-large', 'body', 'description'],
    },
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'link'] },
  },
  component: ButtonStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Controls/Button',
} as Meta;
