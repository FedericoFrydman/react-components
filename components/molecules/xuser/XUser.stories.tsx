import { Story } from '@storybook/react';
import docs from './XUser.docs.mdx';
import { XUser, XUserProps } from './XUser';

const XUserStory: Story<XUserProps> = (args: XUserProps) => <XUser {...args} />;

export const XUserLegalshield = XUserStory.bind({});
XUserLegalshield.args = {
  domainName: 'legalshield.com',
};

export default {
  argTypes: {},
  component: XUserStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/XUser',
};
