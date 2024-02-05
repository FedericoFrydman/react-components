import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Heading } from '../heading/Heading';
import { Text, TextProps } from '../text/Text';
import '../../assets/styles/utilities.scss';

export type TitleSize = 'small' | 'medium' | 'large';

export interface TitleProps extends Omit<TextProps, 'textSize'> {
  /**
   * Size of the title. Defaults to `medium`.
   */
  textSize?: TitleSize;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLParagraphElement>;
}

const TitleComponent = ({ text, textSize, classNames = [], ...props }: TitleProps, ref: TitleProps['ref']) => {
  switch (textSize) {
    case 'large':
      return <Heading ref={ref} text={text} as="T20" classNames={classNames} />;
    case 'small':
      return <Text {...props} ref={ref} textSize="small" text={text} classNames={classNames} />;
    case 'medium':
    default:
      return <Text {...props} ref={ref} textSize="medium" text={text} classNames={classNames} />;
  }
};

export const Title = forwardRef<HTMLParagraphElement, TitleProps>(TitleComponent);
