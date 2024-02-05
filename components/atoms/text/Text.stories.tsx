import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './Text';

const TextStory: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = TextStory.bind({});
Default.args = {
  text: 'This is example body text',
};
export const Tiny = TextStory.bind({});
Tiny.args = {
  text: 'This is example body text',
  textSize: 'tiny',
};
export const Small = TextStory.bind({});
Small.args = {
  text: 'This is example body text',
  textSize: 'small',
};
export const Medium = TextStory.bind({});
Medium.args = {
  text: 'This is example body text',
  textSize: 'medium',
};
export const Large = TextStory.bind({});
Large.args = {
  text: 'This is example body text',
  textSize: 'large',
};
export const ExtraLarge = TextStory.bind({});
ExtraLarge.args = {
  text: 'This is example body text',
  textSize: 'extra-large',
};
export const Bold = TextStory.bind({});
Bold.args = {
  bold: true,
  text: 'This is example body text',
};
export const Semibold = TextStory.bind({});
Semibold.args = {
  semiBold: true,
  text: 'This is example body text',
};
export const Italic = TextStory.bind({});
Italic.args = {
  italic: true,
  text: 'This is example body text',
};
export const Strike = TextStory.bind({});
Strike.args = {
  strike: true,
  text: 'This is example body text',
};
export const WithSeparator = TextStory.bind({});
WithSeparator.args = {
  separator: true,
  text: 'This is example body text',
};
export const Paragraph = TextStory.bind({});
Paragraph.args = {
  as: 'p',
  children: 'A <p> can also be rendered',
};
export const WithChildren = TextStory.bind({});
WithChildren.args = {
  children: 'Some text inside the tags instead of using the text prop',
};

export default {
  argTypes: {
    as: { control: { type: 'select' }, options: ['span', 'p'] },
    bold: { control: { type: 'boolean' } },
    italic: { control: { type: 'boolean' } },
    semiBold: { control: { type: 'boolean' } },
    separator: { control: { type: 'boolean' } },
    strike: { control: { type: 'boolean' } },
    textColor: {
      control: { type: 'select' },
      options: ['N1000', 'N800', 'N700', 'N500', 'N300', 'N100', 'N00'],
    },
    textHeight: {
      control: { type: 'text' },
    },
    textSize: {
      control: { type: 'select' },
      options: ['body', 'description', 'tiny', 'small', 'medium', 'large', 'extra-large'],
    },
    textWeight: { control: { type: 'select' }, options: ['normal', 'semibold', 'bold'] },
  },
  component: TextStory,
  title: 'Typography/Text (Body)',
} as Meta;
