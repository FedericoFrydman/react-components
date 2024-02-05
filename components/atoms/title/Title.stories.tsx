import { Story, Meta } from '@storybook/react';

import { Title, TitleProps } from './Title';

const TitleStory: Story<TitleProps> = (args: TitleProps) => <Title {...args} />;

export const Default = TitleStory.bind({});
Default.args = {
  text: 'Example Title',
  textSize: 'medium',
};
export const Small = TitleStory.bind({});
Small.args = {
  text: 'Example Title',
  textSize: 'small',
};
export const Medium = TitleStory.bind({});
Medium.args = {
  text: 'Example Title',
  textSize: 'medium',
};
export const Large = TitleStory.bind({});
Large.args = {
  text: 'Example Title',
  textSize: 'large',
};

export default {
  argTypes: {
    textSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  component: TitleStory,
  title: 'Typography/Title',
} as Meta;
