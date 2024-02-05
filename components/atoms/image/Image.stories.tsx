import { Story, Meta } from '@storybook/react';

import { Image, ImageProps } from './Image';

import docs from './Image.docs.mdx';

const ImageStory: Story<ImageProps> = (args: ImageProps) => (
  <Image
    src="https://www.iliketowastemytime.com/sites/default/files/imagecache/blog_image/Abu-Dhabi-United-Arab-Emirates-infinity-dunes-wallpaper-by-daniel-olah-iltwmt.jpg"
    {...args}
  />
);

export const Default = ImageStory.bind({});
Default.args = {
  alt: 'This is a image',
};

export const Circle = ImageStory.bind({});
Circle.args = {
  circle: true,
};

export const Clickable = ImageStory.bind({});
Clickable.args = {
  onClick: () => alert('image clicked'),
};

export const Fluid = ImageStory.bind({});
Fluid.args = {
  fluid: true,
};

export const Rounded = ImageStory.bind({});
Rounded.args = {
  rounded: true,
};

export default {
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    circle: { control: { type: 'boolean' } },
    fluid: { control: { type: 'boolean' } },
    rounded: { control: { type: 'boolean' } },
    src: {
      control: { type: 'text' },
    },
  },
  component: ImageStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/Image',
} as Meta;
