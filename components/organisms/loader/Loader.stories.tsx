import { Story, Meta } from '@storybook/react';
import { Loader, LoaderProps } from './Loader';
import docs from './Loader.docs.mdx';

const LoaderStory: Story<LoaderProps> = (args: LoaderProps) => <Loader {...args}></Loader>;

export const Default = LoaderStory.bind({});
Default.args = {
  loaderState: {
    alertAppearance: 'default',
    alertIcon: 'id_family',
    loading: true,
    message: 'loading',
    modalLabel: 'loading',
    modalTitle: 'loading',
    spinnerBlocking: false,
    spinnerSize: 'medium',
  },
};

export default {
  argTypes: {},
  component: LoaderStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Layout/Loader',
} as Meta;
