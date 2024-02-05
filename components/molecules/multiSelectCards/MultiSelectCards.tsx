import React, { Ref, forwardRef } from 'react';
import cn from 'classnames';

import './MultiSelectCards.scss';
import '../../assets/styles/shadows.scss';
import '../../assets/styles/utilities.scss';
import { Text } from '../../atoms/text/Text';
import { Icon, IconNames } from '../../../components/atoms/icon/Icon';

export interface MultiSelectCardsProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   *  Additional classNames on MultiSelectCards.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Callback function when card is clicked.
   */
  onCardClick?: (card: string) => void;
  /**
   * An array of tuples that contains text and icons of cards.
   */
  cards: [string, IconNames?];
  /**
   * Defines card width.
   */
  cardWidth?: string;
  /**
   * Defines card height.
   */
  cardHeight?: string;
  /**
   * Defines selected cards.
   */
  selectedCards?: string[];
}

const MultiSelectCardsComponent = (
  {
    classNames = [],
    cards,
    onCardClick = null,
    cardWidth = null,
    cardHeight = null,
    selectedCards = [],
  }: MultiSelectCardsProps,
  ref: MultiSelectCardsProps['ref'],
) => {
  const classMultiSelectCard = 'lsux-multi-select-card';
  return (
    <div className={cn('lsux-multi-select-cards', classNames)} ref={ref}>
      {cards.map((card) => (
        <div key={card[0]} style={{ width: cardWidth }}>
          <div
            className={cn(classMultiSelectCard, 'shadow100-bottom', {
              [`${classMultiSelectCard}-selected`]: selectedCards.includes(card[0]),
            })}
            key={card[0]}
            style={{ height: cardHeight }}
            onClick={() => {
              onCardClick(card[0]);
            }}
          >
            <div className={cn(`${classMultiSelectCard}-icon-container`)}>
              <Icon
                name={card[1]}
                size="large"
                color="BRAND300"
                classNames={[selectedCards.includes(card[0]) ? `${classMultiSelectCard}-icon-selected` : '']}
                noTransition={true}
              />
            </div>
            <Text
              text={card[0]}
              textSize="small"
              textWeight="semibold"
              classNames={[
                `${classMultiSelectCard}-text`,
                selectedCards.includes(card[0]) ? `${classMultiSelectCard}-text-selected` : '',
              ]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * MultiSelectCards is a collection of card components to display.
 */

export const MultiSelectCards = forwardRef<HTMLDivElement, MultiSelectCardsProps>(MultiSelectCardsComponent);
