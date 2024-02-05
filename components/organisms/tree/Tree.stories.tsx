import { Story, Meta } from '@storybook/react';
import { Tree, TreeProps } from './Tree';
import docs from './Tree.docs.mdx';

const TreeStory: Story<TreeProps> = (args: TreeProps) => <Tree {...args}></Tree>;

export const Default = TreeStory.bind({});

Default.args = {
  allowSelect: true,
  root: {
    children: [
      { id: 1, name: 'Nathan' },
      {
        children: [
          { id: 3, name: 'One' },
          { id: 4, name: 'Two' },
        ],
        id: 2,
        name: 'Jackie',
      },
      { id: 4, name: 'Leslie' },
    ],
    id: 0,
    name: 'Arnold Blinn',
  },
  selectedId: 0,
};

export default {
  argTypes: {},
  component: TreeStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Navigation/Tree',
} as Meta;
