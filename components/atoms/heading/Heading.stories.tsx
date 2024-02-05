import { Story, Meta } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

const HeadingStory: Story<HeadingProps> = (args: HeadingProps) => <Heading {...args} />;

export const T95 = HeadingStory.bind({});
T95.args = {
  as: 'T95',
  text: 'This is a <h1></h1>',
};

export const T76 = HeadingStory.bind({});
T76.args = {
  as: 'T76',
  text: 'This is a <h1></h1>',
};

export const T61 = HeadingStory.bind({});
T61.args = {
  as: 'T61',
  text: 'This is a <h1></h1>',
};

export const T49 = HeadingStory.bind({});
T49.args = {
  as: 'T49',
  text: 'This is a <h1></h1>',
};

export const T39 = HeadingStory.bind({});
T39.args = {
  as: 'T39',
  text: 'This is a <h1></h1>',
};

export const T31 = HeadingStory.bind({});
T31.args = {
  as: 'T31',
  text: 'This is a <h1></h1>',
};

export const T28 = HeadingStory.bind({});
T28.args = {
  as: 'T28',
  text: 'This is a <h1></h1>',
};

export const T26 = HeadingStory.bind({});
T26.args = {
  as: 'T26',
  text: 'This is a <h2></h2>',
};

export const T20 = HeadingStory.bind({});
T20.args = {
  as: 'T20',
  text: 'This is a <h3></h3>',
};

export const T16 = HeadingStory.bind({});
T16.args = {
  as: 'T16',
  size: 'T16',
  text: 'This is a <h4></h4>',
};

export const T14 = HeadingStory.bind({});
T14.args = {
  as: 'T14',
  text: 'This is a <h5></h5>',
};

export default {
  argTypes: {
    as: {
      control: { type: 'select' },
      options: ['T95', 'T76', 'T61', 'T49', 'T39', 'T31', 'T28', 'T26', 'T20', 'T16', 'T14'],
    },
    useBrand: { control: { type: 'boolean' } },
  },
  component: HeadingStory,
  title: 'Typography/Heading',
} as Meta;
