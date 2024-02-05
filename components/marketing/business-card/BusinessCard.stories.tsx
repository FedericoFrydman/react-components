import { Story, Meta } from '@storybook/react';

import { Container } from '../../../components/atoms/container/Container';
import { BusinessCard, BusinessCardProps } from './BusinessCard';
import docs from './BusinessCard.docs.mdx';

const BusinessCardStory: Story<BusinessCardProps> = (args: BusinessCardProps) => (
  <Container style={{ width: 420 }} classNames={['m-4']}>
    <BusinessCard {...args} />
  </Container>
);

export const Default = BusinessCardStory.bind({});
Default.args = {
  displayName: 'John Doe',
  email: 'john.doe@pplsi.com',
  envPrefix: 'dev',
  id: 'card-id',
  market: 'en-US',
  phone: '(666)666-0000',
  profileImage: 'https://api.legalshield.com/v2/public/associates/avatar/127525095-1596790237.195000.jpg',
  sitename: 'https://www.pplsi.com',
  title: 'Card Title',
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
  component: BusinessCardStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Marketing/BusinessCard',
} as Meta;
