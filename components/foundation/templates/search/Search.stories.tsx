import { Story, Meta } from '@storybook/react';
import { Search } from './Search';

const SearchStory: Story = () => <Search />;

export const Default = SearchStory.bind({});

export default {
  argTypes: {},
  component: SearchStory,
  title: 'Page Layouts/Search',
} as Meta;
