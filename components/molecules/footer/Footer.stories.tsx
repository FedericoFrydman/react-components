import { Story } from '@storybook/react';

import { Footer, FooterProps } from './Footer';

const FooterStory: Story<FooterProps> = (args: FooterProps) => <Footer {...args} />;

export const Default = FooterStory.bind({});

Default.args = {
  brandName: 'LegalShield',
};

export default {
  argTypes: {
    align: { control: { type: 'select' }, options: ['left', 'right', 'center'] },
    brandName: { control: { type: 'text' } },
    htmlContent: { control: { type: 'text' } },
  },
  component: Footer,
  title: 'Layout/Footer',
};
