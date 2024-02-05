import { forwardRef, Ref } from 'react';
import cn from 'classnames';

import { Icon, IconNames } from '../icon/Icon';
import { Text, TextSize } from '../text/Text';

import './link.scss';

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

export type LinkPosition = 'left' | 'right';

export type LinkWeight = 'normal' | 'semibold';

export interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, 'target' | 'css'> {
  /**
   * Remove the default margin below the text.
   */
  noMargin?: boolean;
  /**
   * Specifies where to open the link
   */
  target?: LinkTarget;
  /**
   * The text to be rendered
   */
  text: string;
  /**
   * Size of the text.
   * @default `medium` paramater
   */
  textSize?: TextSize;
  /**
   * The font weight.
   * @default `normal` paramater
   */
  textWeight?: LinkWeight;
  /**
   * Display an icon in addition to the text to help to identify the action. The color will be same of the text
   */
  icon?: IconNames;
  /**
   * Icon at left/right of the link. Default right.
   */
  iconPosition?: LinkPosition;
  /**
   * Disables link text decoration (i.e. the underline under the link).
   * @deprecated Default is no decoration. Will be removed in future verison.
   */
  noDecoration?: boolean;
  /**
   * Show link text decoration underline always.
   */
  decoration?: boolean;
  /**
   * Custom classes for the component.
   * @default false paramater
   */
  classNames?: cn.Argument;
  /**
   * The text to be rendered, unless you set the text prop.
   */
  children?: string | number;
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLAnchorElement>;
  /**
   * An event id that will be used by analytics and test automation.
   */
  pplsiEventId?: string;
}

const LinkComponent = (
  {
    href = '',
    target,
    noMargin,
    text,
    icon,
    children,
    iconPosition = 'right',
    noDecoration,
    decoration = false,
    classNames = [],
    pplsiEventId,
    textWeight = 'normal',
    textSize = 'medium',
    ...props
  }: LinkProps,
  ref: LinkProps['ref'],
) => {
  const classLink = 'lsux-link';
  const cnLink = cn(
    {
      [`${classLink}`]: true,
      [`${classLink}--no-margin`]: noMargin,
      [`${classLink}--decoration`]: decoration,
      [`${classLink}--no-decoration`]: noDecoration,
    },
    classNames,
  );

  return (
    <a {...props} ref={ref} href={href} data-pplsi-event-id={pplsiEventId} className={cnLink} target={target}>
      {icon && iconPosition === 'left' && <Icon name={icon} size="small" classNames={['mr-2']} />}
      {text ? <Text text={text} textWeight={textWeight} textSize={textSize} /> : children}
      {icon && iconPosition === 'right' && <Icon name={icon} size="small" classNames={['ml-2']} />}
    </a>
  );
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(LinkComponent);
