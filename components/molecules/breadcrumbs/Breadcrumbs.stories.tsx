import { Story, Meta } from '@storybook/react';

import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

import docs from './Breadcrumbs.docs.mdx';

const BreadcrumbsStory: Story<BreadcrumbsProps> = (args: BreadcrumbsProps) => <Breadcrumbs {...args}></Breadcrumbs>;

export const Default = BreadcrumbsStory.bind({});
Default.args = {
  crumbs: [
    { label: 'Home', link: '/' },
    { label: 'Sub1', link: '/sub1' },
    { label: 'Sub2', link: '/sub2' },
    { label: 'Sub3', link: '/sub3' },
    { label: 'Sub4', link: '/sub4' },
  ],
  maxTail: 2,
};

export const CrumbWithoutLink = BreadcrumbsStory.bind({});
CrumbWithoutLink.args = {
  crumbs: [
    { label: 'Home', link: '/' },
    { label: 'Sub1', link: '/sub1' },
    { label: 'Sub2', link: undefined },
    { label: 'Sub3', link: undefined },
    { label: 'Sub4', link: '/sub4' },
  ],
  maxTail: 2,
};

export const CrumbFullMaxTail = BreadcrumbsStory.bind({});
CrumbFullMaxTail.args = {
  crumbs: [
    { label: 'Home', link: '/' },
    { label: 'Sub1', link: '/sub1' },
    { label: 'Sub2', link: '/sub2' },
    { label: 'Sub3', link: '/sub3' },
  ],
  maxTail: 4,
};

export const TwoCrumbs = BreadcrumbsStory.bind({});
TwoCrumbs.args = {
  crumbs: [
    { label: 'Home', link: '/' },
    { label: 'Sub1', link: '/sub1' },
  ],
  maxTail: 2,
};

export default {
  argTypes: {},
  component: BreadcrumbsStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Navigation/Breadcrumbs',
} as Meta;
