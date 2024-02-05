import { Story, Meta } from '@storybook/react';

import { Label, LabelProps } from './Label';

const LabelStory: Story<LabelProps> = (args: LabelProps) => <Label {...args} />;

export const Default = LabelStory.bind({});
Default.args = {
  text: 'Example Label',
};
export const Tiny = LabelStory.bind({});
Tiny.args = {
  text: 'Example Label',
  textSize: 'tiny',
};
export const Small = LabelStory.bind({});
Small.args = {
  text: 'Example Label',
  textSize: 'small',
};
export const Medium = LabelStory.bind({});
Medium.args = {
  text: 'Example Label',
  textSize: 'medium',
};
export const Large = LabelStory.bind({});
Large.args = {
  text: 'Example Label',
  textSize: 'large',
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
    textHeight: { control: { type: 'text' } },
    textSize: {
      control: { type: 'select' },
      options: ['body', 'description', 'tiny', 'small', 'medium', 'large', 'extra-large'],
    },
    textWeight: { control: { type: 'select' }, options: ['normal', 'semibold', 'bold'] },
  },
  component: LabelStory,
  title: 'Typography/Label',
} as Meta;
