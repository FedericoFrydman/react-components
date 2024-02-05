import { forwardRef, ReactElement, Ref } from 'react';
import cn from 'classnames';

import './text.scss';
import '../../assets/styles/utilities.scss';

export type TextAs = 'p' | 'span';

export type TextSize = 'body' | 'description' | 'tiny' | 'small' | 'medium' | 'large' | 'extra-large';

export type TextWeight = 'normal' | 'semibold' | 'bold';

export type TextColor = 'N1000' | 'N800' | 'N700' | 'N500' | 'N300' | 'N100' | 'N00';

export interface TextProps extends Omit<React.HTMLProps<HTMLParagraphElement>, 'css'> {
  /**
   * Render a span or a paragraph. Default 'span'.
   */
  as?: TextAs;
  /**
   * Text value to be rendered
   */
  text?: string;
  /**
   * Defines the text height
   */
  textHeight?: string;
  /**
   * Size of the text. Defaults to `medium`.
   */
  textSize?: TextSize;
  /**
   * Weight of the text
   */
  textWeight?: TextWeight;
  /**
   * Sets the `textWeight` to bold
   * @deprecated Use `fontWeight='bold'` instead. Will be removed in future verison.
   */
  bold?: boolean;
  /**
   * Sets the `textWeight` to semibold
   * @deprecated Use `fontWeight='semibold'` instead. Will be removed in future verison.
   */
  semiBold?: boolean;
  /**
   * Sets the text style to italic.
   */
  italic?: boolean;
  /**
   * Add a strikethrough to the text.
   */
  strike?: boolean;
  /**
   * Text value to be rendered
   */
  children?: string | number | ReactElement;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Color of the text
   * @deprecated Text defaults to N800 color. This prop will be removed in a future verison.
   */
  color?: TextColor;
  /**
   * Modifies the text as separator
   */
  separator?: boolean;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLParagraphElement>;
}

const TextComponent = (
  {
    as,
    bold,
    children,
    color,
    italic,
    semiBold,
    separator,
    strike,
    text,
    textHeight,
    textSize = 'medium',
    textWeight = 'normal',
    classNames = [],
    ...props
  }: TextProps,
  ref: TextProps['ref'],
) => {
  // Warn if bold or semibold props are used
  if (bold || semiBold) {
    console.warn('bold & semibold are deprecated. Please use `textWeight` instead.');
  }

  // Warn if color prop is used
  if (color) {
    console.warn('color is deprecated. Text is defaulted to $N800');
  }

  // Warn if body or description textSize values are used
  if (textSize === 'body' || textSize === 'description') {
    console.warn(
      'textSizes `body` and `description` have been deprecated. Please use `tiny`, `small`, `medium`, `large`, or `extra-large` instead.',
    );
  }

  // Set textWeight
  if (semiBold) {
    textWeight = 'semibold';
  }
  if (bold) {
    textWeight = 'bold';
  }

  const classText = 'lsux-text';
  const setHeight = { height: textHeight, overflow: 'auto' };
  const useHeight = textHeight ? setHeight : {};

  const cnText = cn(
    {
      [`${classText}`]: true,
      [`${classText}--separator`]: separator,
      [`${classText}--italic`]: italic,
      [`${classText}--strike`]: strike,
      [`${classText}--${textSize}`]: textSize,
      [`${classText}--${textWeight}`]: textWeight,
    },
    classNames,
  );

  if (as === 'span') {
    return (
      <span {...props} ref={ref} style={{ ...useHeight, ...props.style }} className={cnText}>
        {text ? text : children}
      </span>
    );
  } else {
    return (
      <p {...props} ref={ref} style={{ ...useHeight, ...props.style }} className={cnText}>
        {text ? text : children}
      </p>
    );
  }
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(TextComponent);
