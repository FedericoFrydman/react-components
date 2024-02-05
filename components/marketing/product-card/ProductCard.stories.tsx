import { Story, Meta } from '@storybook/react';

import { Container } from '../../../components/atoms/container/Container';
import { Text } from '../../../components/atoms/text/Text';
import { ProductCard, ProductCardProps } from './ProductCard';
import docs from './ProductCard.docs.mdx';

const ProductCardStory: Story<ProductCardProps> = (args: ProductCardProps) => (
  <Container style={{ width: 340 }} classNames={['m-4']}>
    <ProductCard {...args} />
  </Container>
);

export const Default = ProductCardStory.bind({});
Default.args = {
  children: <Text text="LegalShield stands strong, Production for all who seek, Legal peace of mind." />,
  detailsLabel: 'Plan Details',
  detailsUrl: 'https://www.legalshield.com',
  iconType: 'legalshield',
  market: 'en-us',
  price: 'from $10.95',
  subprice: '+ processing fee',
  subtitle: 'Subtitle',
  title: 'Title',
};

export default {
  argTypes: {
    backgroundColor: { control: { type: 'text' } },
    displayName: { control: { type: 'text' } },
    email: { control: { type: 'text' } },
    envPrefix: { control: { type: 'text' } },
    market: { control: { type: 'select' }, options: ['en-us', 'es-us', 'en-ca', 'fr-ca'] },
    phone: { control: { type: 'text' } },
    profileImage: { control: { type: 'text' } },
    sitename: { control: { type: 'text' } },
  },
  component: ProductCardStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Marketing/ProductCard',
} as Meta;
