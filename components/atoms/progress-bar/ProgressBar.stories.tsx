import { Story, Meta } from '@storybook/react';
import { Container } from '../container/Container';
import { ProgressBar, ProgressBarProps } from './ProgressBar';
import docs from './ProgressBar.docs.mdx';

const ProgressBarStory: Story<ProgressBarProps> = (args: ProgressBarProps) => (
  <Container classNames={['p-5']}>
    <ProgressBar {...args} />
  </Container>
);

export const Default = ProgressBarStory.bind({});
Default.args = {
  progressBarType: 'progress',
};

export default {
  argTypes: {
    blocking: { control: 'boolean' },
    progressBarType: { control: 'select', options: ['progress', 'loop'] },
    progressNumber: { type: 'number' },
  },

  component: ProgressBarStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/ProgressBar',
} as Meta;
