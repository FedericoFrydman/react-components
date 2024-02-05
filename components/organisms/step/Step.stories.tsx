import { Story, Meta } from '@storybook/react';

import { Step, StepProps } from './Step';

import docs from './Step.docs.mdx';

const StepStory: Story<StepProps> = (args: StepProps) => <Step {...args}></Step>;

export const Default = StepStory.bind({});

Default.args = {
  activeIndex: 1,
  brand: 'ls',
  clickable: [0],
  completed: [0],
  counterPosition: 'right',
  stepNames: ['One', 'Two', 'Three'],
};

export const SliderVariant = StepStory.bind({});

SliderVariant.args = {
  activeIndex: 2,
  brand: 'ids',
  clickable: [2],
  completed: [0, 1, 2],
  counterPosition: 'right',
  stepNames: ['One', 'Two', 'Three', 'Four'],
  variant: 'slider',
};

export const SliderWithBackButton = StepStory.bind({});
SliderWithBackButton.parameters = {
  docs: {
    description: {
      story: `By passing backSliderClick function, a Back button will be visible only for slider variant`,
    },
  },
};

SliderWithBackButton.args = {
  activeIndex: 1,
  backSliderClick: () => window.alert('Back slider clicked'),
  brand: 'ids',
  clickable: [2],
  completed: [0, 1],
  counterPosition: 'right',
  stepNames: ['One', 'Two', 'Three', 'Four'],
  variant: 'slider',
};

export const Section = StepStory.bind({});
Section.args = {
  activeIndex: 6,
  counterPosition: 'right',
  sections: [
    { name: 'Section 1', numberOfTasks: 4 },
    { name: 'Section 2', numberOfTasks: 3 },
    { name: 'Section 3', numberOfTasks: 4 },
    { name: 'Section 4', numberOfTasks: 5 },
  ],
  stepNames: ['One', 'Two', 'Three', 'Four'],
  variant: 'section',
};

export default {
  argTypes: {
    alignContent: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
    },
    alignItems: { control: { type: 'select' }, options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] },
    background: { control: { type: 'select' }, options: ['light-gray', 'white', 'none'] },
    fixed: { control: { type: 'boolean' } },
    flexDirection: { control: { type: 'select' }, options: ['row', 'row-reverse', 'column', 'column-reverse'] },
    flexWrap: { control: { type: 'select' }, options: ['wrap', 'nowrap', 'wrap-reverse'] },
    flexbox: { control: { type: 'boolean' } },
    justifyContent: {
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    },
  },
  component: StepStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Navigation/Step',
} as Meta;
