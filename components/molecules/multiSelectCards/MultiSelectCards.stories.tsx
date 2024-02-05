import { Story, Meta } from '@storybook/react';
import { MultiSelectCards, MultiSelectCardsProps } from './MultiSelectCards';
import docs from './MultiSelectCards.docs.mdx';
import { useState } from 'react';

const MultiSelectCardsStory: Story<MultiSelectCardsProps> = (args: MultiSelectCardsProps) => {
  const [cardsSelected, setCardsSelected] = useState([]);
  const onCardClick = (card: string) => {
    alert('Card Clicked');
    if (cardsSelected.includes(card)) {
      const newSelectedCards = cardsSelected.filter((c) => c !== card);
      setCardsSelected(newSelectedCards);
    } else {
      setCardsSelected((prevSelectedCards) => [...prevSelectedCards, card]);
    }
  };

  return <MultiSelectCards selectedCards={cardsSelected} onCardClick={(card) => onCardClick(card)} {...args} />;
};

export const Default = MultiSelectCardsStory.bind({});
Default.args = {
  cardHeight: '120px',
  cardWidth: '200px',
  cards: [
    ['Married', 'ls_prenup'],
    ['Pursue Higher Education', 'ls_balance'],
    ['Own a business', 'ls_access'],
    ['Own a home', 'ls_family'],
    ['Rent a home', 'ls_family'],
    ['Have a will', 'ls_family'],
  ],
};

export default {
  argTypes: {
    cardHeight: {
      control: { type: 'text' },
    },
    cardWidth: {
      control: { type: 'text' },
    },
  },
  component: MultiSelectCardsStory,
  parameters: {
    docs: { page: docs },
  },
  title: 'Components/MultiSelectCards',
} as Meta;
