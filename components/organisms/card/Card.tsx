import { Children, cloneElement, FC, forwardRef, isValidElement, ReactElement, ReactNode, Ref } from 'react';
import cn from 'classnames';

import { Button, ButtonProps, ButtonVariant } from '../../molecules/button/Button';
import { Container, ContainerBgColors, ContainerProps } from '../../../components/atoms/container/Container';
import { Image } from '../../../components/atoms/image/Image';
import { Heading } from '../../../components/atoms/heading/Heading';
import { Text } from '../../../components/atoms/text/Text';
import '../../assets/styles/utilities.scss';
import './Card.scss';

const classCard = 'lsux-card';

export type PaddingType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface DeprecatedCardProps {
  /**
   * Title of the card
   * @deprecated Please use `Card.Title` instead.
   */
  title?: string;
  /**
   * Define the src of the optional image
   * @deprecated Please use `Card.Image` instead.
   */
  imageURL?: string;
  /**
   * Text content in the card
   * @deprecated Please use `Text` instead.
   */
  text?: string;
  /**
   * Text in the (optional) button
   * @deprecated Please use `Card.Actions` instead.
   */
  buttonText?: string;
  /**
   * Variant of the button
   * @deprecated Please use `Card.Actions` instead.
   */
  buttonVariant?: ButtonVariant;
  /**
   * Custom padding
   * @deprecated Please use `classNames` in `Card.Content` instead.
   */
  padding?: PaddingType;
  /**
   * Define card title height
   * @deprecated This will be removed in a future version.
   */
  cardTitleHeight?: string;
  /**
   * Define card text height
   * @deprecated No longer works. Use `Text` component instead. This will be removed in a future version.
   */
  cardTextHeight?: string;
  /**
   * Alt text for image
   * @deprecated Please use `Card.Image` instead.
   */
  imageAltText?: string;
}

export interface CardProps extends DeprecatedCardProps, Omit<React.HTMLProps<HTMLDivElement>, 'onClick' | 'css'> {
  children?: ReactNode | ReactNode[];
  /**
   * Define card height
   */
  cardHeight?: string;
  /**
   * Defines card width.
   */
  cardWidth?: string;
  /**
   * Define if container has background
   * @default white
   */
  background?: ContainerBgColors;
  /**
   * Determines if the card can be selected or not. This adds selectable styling and pointer.
   */
  selectable?: boolean;
  /**
   * Determines if the card is selected or not
   */
  isSelected?: boolean;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Callback function when card is clicked
   */
  onClick?: (id: string) => void;
}

export interface CardActionsProps {
  /**
   * Alignment of the buttons
   * @default left
   */
  align?: 'left' | 'center' | 'right';
  /**
   * Buttons to be displayed
   */
  children: ReactElement | ReactElement[];
}
export const CardActions: FC<CardActionsProps> = ({ children, align = 'left' }: CardActionsProps) => {
  const childrenWithProps = Children.map(children as ReactElement<ButtonProps>[], (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { shape: 'round', textSize: 'medium', variant: 'tertiary' });
    }
    return child;
  });

  const alignMap: Record<string, string> = {
    center: 'justify-content-center',
    left: 'justify-content-start',
    right: 'justify-content-end',
  };

  const cnCardAction = cn(`${classCard}--card-actions`, alignMap[align]);

  return <div className={cnCardAction}>{childrenWithProps}</div>;
};

export interface CardContentProps extends ContainerProps {
  /**
   * Define if container has background
   */
  background?: ContainerBgColors;
  /**
   * Elements to show in the card content
   */
  children: ReactElement | ReactElement[];
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
  /**
   * Padding for the content
   * @deprecated Please use `classNames` instead
   */
  padding?: number;
}
export const CardContent: FC<CardContentProps> = ({
  children,
  classNames = [],
  padding = 4,
  background,
  ...props
}: CardContentProps) => {
  const cnCardContent: cn.Argument = [`${classCard}__content`, `p-${padding}`, classNames];
  return (
    <Container {...props} background={background} classNames={cnCardContent}>
      {children}
    </Container>
  );
};

export interface CardImageProps {
  imageURL: string;
  imageAltText?: string;
  classNames?: cn.Argument;
}
export const CardImage: FC<CardImageProps> = ({ imageURL, imageAltText, classNames = [] }: CardImageProps) => {
  const cnCardImage = cn(`${classCard}__image`, classNames);
  return (
    <div className={cnCardImage}>
      <Image src={imageURL} alt={imageAltText} fluid />
    </div>
  );
};

export interface CardTitleProps {
  /**
   * Title of the card
   */
  children: string;
  /**
   * Additional class names
   */
  classNames?: cn.Argument;
  /**
   * Card title height
   */
  titleHeight?: string;
}
export const CardTitle: FC<CardTitleProps> = ({ children, classNames = [], titleHeight }: CardTitleProps) => {
  const cnCardTitle = cn(`${classCard}__title`, classNames);
  return (
    <div className={cnCardTitle}>
      <Heading as="T16" text={children} titleHeight={titleHeight} classNames={['pb-3']} />
    </div>
  );
};

/**
 * Cards are flexible, rectangular containers for text, images, or actions for a single topic. Cards are intended to be flexible across device widths and should live within our grid and defined layout.
 */
const CardComponent = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      onClick = null,
      children,
      classNames = [],
      buttonText,
      buttonVariant,
      cardHeight,
      cardTextHeight,
      cardTitleHeight,
      cardWidth,
      background,
      imageAltText,
      imageURL,
      padding,
      isSelected,
      selectable = isSelected !== undefined ?? false,
      text,
      title,
      ...props
    },
    ref: CardProps['ref'],
  ) => {
    // Warn for deprecated props
    if (title) console.warn(`title has been deprecated.`);
    if (imageURL) console.warn(`imageURL has been deprecated.`);
    if (text) console.warn(`text has been deprecated.`);
    if (buttonText) console.warn(`buttonText has been deprecated.`);
    if (buttonVariant) console.warn(`buttonVariant has been deprecated.`);
    if (padding) console.warn(`padding has been deprecated.`);
    if (cardTitleHeight) console.warn(`cardTitleHeight has been deprecated.`);
    if (cardTextHeight) console.warn(`cardTextHeight has been deprecated.`);
    if (imageAltText) console.warn(`imageAltText has been deprecated.`);

    // Build content when deprecated props are used
    let cardContent = null;
    let cardImage = null;
    let cardTitle = null;
    let cardText = null;

    if (imageURL) cardImage = <CardImage imageURL={imageURL} imageAltText={imageAltText} />;
    if (title) cardTitle = <CardTitle titleHeight={cardTitleHeight}>{title}</CardTitle>;
    if (text) cardText = <Text text={text} />;

    // Backwards compatibility for cardTitle & cardText
    if (cardTitle || cardText) {
      cardContent = (
        <CardContent classNames={[`p-${padding}`]}>
          {cardTitle}
          {cardText}
        </CardContent>
      );
    }

    // Backwards compatibility card actions
    let cardActions = null;
    if (buttonText)
      cardActions = (
        <Card.Actions>
          <Button shape="round" label={buttonText} variant={buttonVariant} />
        </Card.Actions>
      );

    const handleCardClick = (): void => {
      if (onClick != null) {
        onClick(props.id);
      }
    };

    const cnCard = cn(
      {
        [`${classCard}`]: true,
        [`${classCard}--bg--${background ?? 'white'}`]: true,
        [`${classCard}--selectable`]: selectable,
        [`${classCard}--selected`]: isSelected,
        [`${classCard}--unselected`]: !isSelected,
      },
      classNames,
    );

    const cardStyle = {
      height: cardHeight,
      width: cardWidth,
    };

    return (
      <div {...props} ref={ref} onClick={handleCardClick} className={cnCard} style={{ ...cardStyle, ...props.style }}>
        {cardImage}
        {cardContent}
        {cardActions}
        {children}
      </div>
    );
  },
) as FC<CardProps>;

CardComponent.displayName = 'Card';

type CardActionsComponent = FC<CardActionsProps>;
type CardContentComponent = FC<CardContentProps>;
type CardImageComponent = FC<CardImageProps>;
type CardTitleComponent = FC<CardTitleProps>;
type CardComp = FC<CardProps> & {
  Actions: CardActionsComponent;
  Content: CardContentComponent;
  Image: CardImageComponent;
  Title: CardTitleComponent;
};

export const Card = CardComponent as CardComp;

Card.Actions = CardActions;
Card.Content = CardContent;
Card.Image = CardImage;
Card.Title = CardTitle;
