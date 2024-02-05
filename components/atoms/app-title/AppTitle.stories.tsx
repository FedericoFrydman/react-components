import { Story, Meta } from '@storybook/react';

import { AppTitle, AppTitleProps } from './AppTitle';

const AppTitleStory: Story<AppTitleProps> = (args: AppTitleProps) => <AppTitle {...args} />;

export const Default = AppTitleStory.bind({});
Default.args = {
  text: 'Example App Title',
};

export default {
  argTypes: {},
  component: AppTitleStory,
  title: 'Typography/AppTitle',
} as Meta;
