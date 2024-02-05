import { Story, Meta } from '@storybook/react';

import { Container } from '../../../components/atoms/container/Container';
import { MarketingFooter, MarketingFooterProps } from './MarketingFooter';
import docs from './MarketingFooter.docs.mdx';

const MarketingFooterStory: Story<MarketingFooterProps> = (args: MarketingFooterProps) => (
  <Container style={{ width: 500 }} classNames={['m-4']}>
    <MarketingFooter {...args} />
  </Container>
);

export const Default = MarketingFooterStory.bind({});
Default.args = {
  availableMarkets: ['en-us', 'es-us', 'en-ca', 'fr-ca'],
  dark: false,
  disclaimerContent: 'Disclaimer content goes here',
  download: 'Legal',
  footerContent: `&copy; PPLSI ${new Date().getFullYear()}`,
  marketPickerModalTitle: 'Select Market',
  onMarketClicked: (market: string) => {
    alert(`market selected: ${market}`);
  },
  social: true,
};

export default {
  argTypes: {
    dark: { control: { type: 'boolean' } },
    disclaimerContent: { control: { type: 'text' } },
    download: { control: { type: 'select' }, options: ['Legal', 'IDS', null] },
    footerContent: { control: { type: 'text' } },
    market: { control: { type: 'select' }, options: ['en-us', 'es-us', 'en-ca', 'fr-ca'] },
    social: { control: { type: 'boolean' } },
  },
  component: MarketingFooterStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Marketing/MarketingFooter',
} as Meta;
