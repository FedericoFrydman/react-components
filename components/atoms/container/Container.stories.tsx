import { Story, Meta } from '@storybook/react';
import '../../assets/styles/utilities.scss';

import docs from './Container.docs.mdx';
import { Container, ContainerProps } from './Container';
import { Text } from '../text/Text';

const ContainerStory: Story<ContainerProps> = (args: ContainerProps) => (
  <Container {...args}>
    <Text text="I am container child!" as="p" classNames={['p-5']} />
  </Container>
);

export const WhiteBackground = ContainerStory.bind({});
WhiteBackground.args = {
  background: 'white',
};

export const LightGrayBackground = ContainerStory.bind({});
LightGrayBackground.args = {
  background: 'light-gray',
};

export default {
  argTypes: {
    background: {
      options: ['light-gray', 'white', 'none'],
      type: 'select',
    },
  },
  component: ContainerStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Container',
} as Meta;
