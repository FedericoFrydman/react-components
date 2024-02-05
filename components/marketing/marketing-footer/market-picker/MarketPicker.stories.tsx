import { Story, Meta } from '@storybook/react';

import { Container } from '../../../../components/atoms/container/Container';
import { MarketPicker, MarketPickerProps } from './MarketPicker';

const MarketPickerStory: Story<MarketPickerProps> = (args: MarketPickerProps) => (
  <Container style={{ width: 500 }} classNames={['m-4']}>
    <MarketPicker {...args} />
  </Container>
);

export const Default = MarketPickerStory.bind({});
Default.args = {
  availableMarkets: ['en-us', 'es-us', 'en-ca', 'fr-ca'],
  dark: false,
  onClick: (market: string) => {
    alert(`market selected: ${market}`);
  },
};

export default {
  argTypes: {
    dark: { control: { type: 'boolean' } },
    market: { control: { type: 'select' }, options: ['en-us', 'es-us', 'en-ca', 'fr-ca'] },
  },
  component: MarketPickerStory,
  title: 'Marketing/MarketPicker',
} as Meta;
