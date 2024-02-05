import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Text, TextProps, TextWeight } from '../text/Text';
import '../../assets/styles/utilities.scss';

export type LabelSize = 'tiny' | 'small' | 'medium' | 'large';

export interface LabelProps extends Omit<TextProps, 'textSize'> {
  /**
   * Size of the text. Defaults to `medium`.
   */
  labelSize?: LabelSize;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLParagraphElement>;
}

const LabelComponent = (
  { text, labelSize = 'medium', classNames = [], ...props }: LabelProps,
  ref: LabelProps['ref'],
) => {
  const getLabelTextWeight = (): TextWeight => {
    switch (labelSize) {
      case 'tiny':
        return 'bold';
      case 'small':
        return 'normal';
      case 'medium':
      case 'large':
      default:
        return 'semibold';
    }
  };

  return (
    <Text
      {...props}
      ref={ref}
      text={text}
      classNames={classNames}
      textSize={labelSize}
      textWeight={getLabelTextWeight()}
    />
  );
};

export const Label = forwardRef<HTMLParagraphElement, LabelProps>(LabelComponent);
