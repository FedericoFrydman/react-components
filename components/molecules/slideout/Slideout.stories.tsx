import { Story, Meta } from '@storybook/react';

import { Slideout, SlideoutProps } from './Slideout';

import docs from './Slideout.docs.mdx';

const SlideoutStory: Story<SlideoutProps> = (args: SlideoutProps) => <Slideout {...args} />;

export const Default = SlideoutStory.bind({});
Default.args = {
  autoClose: true,
  children: <div>This is text inside the slideout</div>,
  isOpen: true,
  side: 'left',
  size: 250,
};

export default {
  argTypes: {
    autoClose: { control: { type: 'boolean' } },
    closeButton: {
      control: { type: 'select' },
      options: ['none', 'float', 'block'],
    },
    isOpen: { control: { type: 'boolean' } },
    modal: { control: { type: 'boolean' } },
    side: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
    size: { control: { type: 'number' } },
  },
  component: SlideoutStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Slideout',
} as Meta;
