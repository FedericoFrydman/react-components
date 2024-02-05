import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Text, TextProps } from '../text/Text';
import './app-title.scss';

export interface AppTitleProps extends TextProps {
  /**
   * Text of the label
   */
  text?: string;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLParagraphElement>;
}

const AppTitleComponent = ({ text, classNames = [], ...props }: AppTitleProps, ref: AppTitleProps['ref']) => (
  <Text {...props} ref={ref} text={text} classNames={['lsux-app-title', cn(classNames)]} />
);

export const AppTitle = forwardRef<HTMLParagraphElement, AppTitleProps>(AppTitleComponent);
