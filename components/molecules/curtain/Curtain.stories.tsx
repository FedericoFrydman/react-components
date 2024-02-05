import { Story, Meta } from '@storybook/react';

import { Curtain, CurtainProps } from './Curtain';

import docs from './Curtain.docs.mdx';

const CurtainStory: Story<CurtainProps> = (args: CurtainProps) => {
  return (
    <Curtain isOpen {...args}>
      <div style={{ backgroundColor: 'gray', height: '100px' }}>Hi</div>
    </Curtain>
  );
};

export const Default = CurtainStory.bind({});

export default {
  argTypes: {
    fixed: { control: { type: 'boolean' } },
    initialAnimate: { control: { type: 'boolean' } },
    isOpen: { control: { type: 'boolean' } },
  },
  component: CurtainStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Curtain',
} as Meta;
