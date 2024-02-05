import { Story, Meta } from '@storybook/react';
import { Container } from '../../atoms/container/Container';
import { Text } from '../../atoms/text/Text';

import { Popover, PopoverProps } from './Popover';

import docs from './Popover.docs.mdx';

const PopoverStory: Story<PopoverProps> = (args: PopoverProps) => (
  <Container classNames={['m-4']}>
    <Popover {...args} />
  </Container>
);

export const WithTitle = PopoverStory.bind({});
WithTitle.args = {
  arrowDistance: 75,
  arrowSide: 'bottom',
  children: (
    <Text
      text="Give related and supplmental information about a topic. Popover is persistent and can support a link or a Button."
      as="p"
    />
  ),
  shadowSide: 'bottom',
  title: 'Popover Title',
};

export const DarkMode = PopoverStory.bind({});
DarkMode.args = {
  arrowDistance: 75,
  arrowSide: 'bottom',
  children: (
    <Text
      text="Give related and supplmental information about a topic. Popover is persistent and can support a link or a Button."
      as="p"
    />
  ),
  dark: true,
  shadowSide: 'bottom',
  title: 'Popover Title',
};

export const CloseAction = PopoverStory.bind({});
CloseAction.args = {
  arrowDistance: 75,
  arrowSide: 'bottom',
  children: (
    <Text
      text="Give related and supplmental information about a topic. Popover is persistent and can support a link or a Button."
      as="p"
    />
  ),
  closeAction: true,
  onClick: () => alert('I will close this popover'),
  shadowSide: 'bottom',
  title: 'Popover Title',
};

export default {
  argTypes: {
    arrowDistance: {
      control: { type: 'select' },
      options: ['0', '25', '50', '75', '100'],
    },
    arrowSide: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    closeAction: { control: { type: 'boolean' } },
    dark: { control: { type: 'boolean' } },
    shadowSide: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    title: {
      control: { type: 'text' },
    },
  },
  component: PopoverStory,
  parameters: {
    docs: { iframeHeight: 200, inlineStories: false, page: docs },
  },
  title: 'Components/Popover',
} as Meta;
