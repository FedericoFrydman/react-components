import { Story, Meta } from '@storybook/react';

import { Page, PageProps } from './Page';

import docs from './Page.docs.mdx';

const PageStory: Story<PageProps> = (args: PageProps) => <Page {...args}></Page>;

export const Default = PageStory.bind({});

Default.args = {
  bucketSize: 1,
  currentBucket: 1,
  maxDisplay: 5,
  numItems: 87,
};

export default {
  argTypes: {},
  component: PageStory,
  parameters: {
    docs: { page: docs },
  },

  title: 'Navigation/Page',
} as Meta;
