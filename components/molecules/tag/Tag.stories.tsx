import { Story, Meta } from '@storybook/react';

import { Tag, TagProps } from './Tag';

import docs from './Tag.docs.mdx';

const TagStory: Story<TagProps> = (args: TagProps) => <Tag {...args} />;

export const Default = TagStory.bind({});
Default.args = {
  isSelected: false,
  onDismissible: null,
  onSelected: null,
  text: 'Default',
};

export const Dismissible = TagStory.bind({});
Dismissible.args = {
  isSelected: false,
  onDismissible: () => alert('X clicked'),
  onSelected: null,
  text: 'Dismissible tag',
};

export const Selectable = TagStory.bind({});
Selectable.args = {
  onDismissible: null,
  onSelected: () => alert('Text clicked'),
  text: 'Selectable tag',
};

export const Selected = TagStory.bind({});
Selected.args = {
  isSelected: true,
  onDismissible: null,
  onSelected: () => alert('Text clicked'),
  text: 'Selected tag',
};

export const Both = TagStory.bind({});
Both.args = {
  isSelected: true,
  onDismissible: () => alert('X clicked'),
  onSelected: () => alert('Text clicked'),
  text: 'Selected And Dismissible tag',
};

export default {
  argTypes: {
    isSelected: { control: { type: 'boolean' } },
    text: {
      control: { type: 'text' },
    },
  },
  component: TagStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Tag',
} as Meta;
