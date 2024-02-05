import Tippy from '@tippyjs/react';
import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Text, TextSize } from '../../atoms/text/Text';

import 'tippy.js/animations/perspective.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/light-border.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/translucent.css';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';
export type TooltipAnimation = 'shift-away' | 'shift-toward' | 'scale' | 'perspective' | '';
export type TooltipTheme = 'light' | 'light-border' | 'material' | 'translucent';

export interface TooltipProps extends Omit<React.HTMLProps<HTMLDivElement>, 'css'> {
  /**
   * Text of the tooltip
   */
  text: string;
  /**
   * Hovered element
   */
  children: JSX.Element;
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>;
  /**
   * Text size of the button
   */
  textSize?: TextSize;
  /**
   * Custom classes for the component.
   */
  classNames?: cn.Argument;
  /**
   * Placement of the tooltip
   */
  placement?: TooltipPlacement;
  /**
   * Shows arrow when true
   */
  arrow?: boolean;
  /**
   * Tooltip animation
   */
  animation?: TooltipAnimation;
  /**
   * Animation duration
   */
  duration?: number | [number, number];
  /**
   * Display custom HTML as tooltip content
   */
  tooltipHTML?: JSX.Element;
  /**
   * Theme color
   */
  theme?: TooltipTheme;
}

const TooltipComponent = (
  {
    theme = 'material',
    children,
    placement = 'top',
    text,
    arrow,
    animation = 'scale',
    duration = [500, 0],
    tooltipHTML,
  }: TooltipProps,
  ref: TooltipProps['ref'],
) => {
  return (
    <Tippy
      theme={theme}
      animation={animation}
      duration={duration}
      arrow={arrow}
      placement={placement}
      ref={ref}
      disabled={!text}
      content={tooltipHTML ? tooltipHTML : <Text text={text} as="p" textSize="small" />}
    >
      {children}
    </Tippy>
  );
};

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(TooltipComponent);
